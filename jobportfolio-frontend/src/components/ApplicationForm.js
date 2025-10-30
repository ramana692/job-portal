import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { authAPI, applicationAPI } from "../services/api";

export default function ApplicationForm({ job, onClose }) {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    qualification: "",
    experience: "",
    resume: null,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    // Check if user is logged in
    const currentUser = authAPI.getCurrentUser();
    if (!currentUser) {
      alert("Please login to apply for jobs");
      navigate("/login");
      return;
    }
    
    setUser(currentUser);
    // Pre-fill form with user data
    setForm(prev => ({
      ...prev,
      fullName: currentUser.name || "",
      email: currentUser.email || "",
      phone: currentUser.phone || ""
    }));
  }, [navigate]);

  function handleChange(e) {
    const { name, value, files } = e.target;
    if (name === "resume") {
      setForm(prev => ({ ...prev, resume: files[0] }));
      return;
    }
    setForm(prev => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      // Check if user is still logged in
      if (!authAPI.isLoggedIn()) {
        alert("Please login to apply for jobs");
        navigate("/login");
        setLoading(false);
        return;
      }

      // Prepare application data
      const applicationData = {
        jobTitle: job.title,
        company: job.company || "Not Specified",
        applicantName: form.fullName,
        email: form.email,
        phone: form.phone,
        coverLetter: `Qualification: ${form.qualification}\nExperience: ${form.experience}`,
        resume: form.resume ? form.resume.name : ""
      };

      console.log("Submitting application:", applicationData);
      console.log("Token exists:", !!localStorage.getItem('token'));

      const response = await applicationAPI.submit(applicationData);
      console.log("Application submitted successfully:", response);
      
      alert(`✅ Application submitted successfully for ${job.title}!\n\nCheck MongoDB Atlas to see your application.`);
      onClose();
    } catch (err) {
      console.error("Application submission error:", err);
      const errorMessage = err.message || "Failed to submit application. Please try again.";
      setError(errorMessage);
      alert(`❌ Error: ${errorMessage}\n\nPlease check the browser console for details.`);
      
      // If unauthorized, redirect to login
      if (err.message.includes("authorized") || err.message.includes("token")) {
        alert("Session expired. Please login again.");
        authAPI.logout();
        navigate("/login");
      }
    } finally {
      setLoading(false);
    }
  }

  if (!job || !user) return null;

  return (
    <div style={{marginTop:10}}>
      <h3 style={{marginTop:0}}>Apply for {job.title}</h3>
      {error && <div style={{color: 'red', padding: '10px', marginBottom: '10px', background: '#ffe6e6', borderRadius: '6px'}}>{error}</div>}
      <form onSubmit={handleSubmit} className="apply-form">
        <input 
          name="fullName" 
          placeholder="Full name" 
          required 
          value={form.fullName} 
          onChange={handleChange} 
        />
        <input 
          type="email" 
          name="email" 
          placeholder="Email" 
          required 
          value={form.email} 
          onChange={handleChange}
        />
        <input 
          name="phone" 
          placeholder="Phone" 
          required 
          value={form.phone} 
          onChange={handleChange}
        />
        <input 
          name="qualification" 
          placeholder="Qualification" 
          value={form.qualification} 
          onChange={handleChange}
        />
        <textarea 
          name="experience" 
          placeholder="Experience" 
          rows="3" 
          value={form.experience} 
          onChange={handleChange}
        ></textarea>
        <label style={{fontSize:'.9rem',color:'#333'}}>Upload Resume (PDF/DOC)</label>
        <input 
          type="file" 
          name="resume" 
          accept=".pdf,.doc,.docx" 
          onChange={handleChange} 
        />
        <div style={{display:'flex', gap:10, marginTop:10}}>
          <button type="submit" disabled={loading}>
            {loading ? "Submitting..." : "Submit Application"}
          </button>
          <button type="button" onClick={onClose} className="btn-outline">Cancel</button>
        </div>
      </form>
      <style>{`
        .apply-form input, .apply-form textarea { width:100%; padding:10px; margin-top:8px; border-radius:6px; border:1px solid #d8dee9; }
        .apply-form button { padding:8px 14px; border-radius:8px; border:none; background:var(--primary); color:white; cursor:pointer; }
        .apply-form button:disabled { opacity: 0.6; cursor: not-allowed; }
        .apply-form .btn-outline { background:transparent; border:1px solid #cfd8e8; color:var(--primary); }
      `}</style>
    </div>
  );
}
