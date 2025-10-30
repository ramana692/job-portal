const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

// Get token from localStorage
const getToken = () => {
  return localStorage.getItem('token');
};

// Get auth headers
const getAuthHeaders = () => {
  const token = getToken();
  return {
    'Content-Type': 'application/json',
    ...(token && { 'Authorization': `Bearer ${token}` })
  };
};

// Authentication APIs
export const authAPI = {
  // Signup
  signup: async (userData) => {
    try {
      const response = await fetch(`${API_URL}/auth/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Signup failed');
      }
      
      // Save token and user data
      if (data.token) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify({
          _id: data._id,
          name: data.name,
          email: data.email,
          phone: data.phone
        }));
      }
      
      return data;
    } catch (error) {
      throw error;
    }
  },

  // Login
  login: async (credentials) => {
    try {
      const response = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Login failed');
      }
      
      // Save token and user data
      if (data.token) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify({
          _id: data._id,
          name: data.name,
          email: data.email,
          phone: data.phone
        }));
      }
      
      return data;
    } catch (error) {
      throw error;
    }
  },

  // Logout
  logout: () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  },

  // Get current user
  getCurrentUser: () => {
    const userStr = localStorage.getItem('user');
    return userStr ? JSON.parse(userStr) : null;
  },

  // Check if user is logged in
  isLoggedIn: () => {
    return !!localStorage.getItem('token');
  },

  // Get user profile
  getProfile: async () => {
    try {
      const response = await fetch(`${API_URL}/auth/me`, {
        method: 'GET',
        headers: getAuthHeaders()
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Failed to get profile');
      }
      
      return data;
    } catch (error) {
      throw error;
    }
  }
};

// Job Application APIs
export const applicationAPI = {
  // Submit job application
  submit: async (applicationData) => {
    try {
      console.log('API: Submitting application to backend:', applicationData);
      console.log('API: Using URL:', `${API_URL}/applications`);
      console.log('API: Auth token:', getToken() ? 'Present' : 'Missing');
      
      const response = await fetch(`${API_URL}/applications`, {
        method: 'POST',
        headers: getAuthHeaders(),
        body: JSON.stringify(applicationData)
      });
      
      console.log('API: Response status:', response.status);
      
      const data = await response.json();
      console.log('API: Response data:', data);
      
      if (!response.ok) {
        throw new Error(data.message || 'Application submission failed');
      }
      
      return data;
    } catch (error) {
      console.error('API: Error submitting application:', error);
      throw error;
    }
  },

  // Get my applications
  getMyApplications: async () => {
    try {
      const response = await fetch(`${API_URL}/applications`, {
        method: 'GET',
        headers: getAuthHeaders()
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Failed to fetch applications');
      }
      
      return data;
    } catch (error) {
      throw error;
    }
  },

  // Get all applications (admin)
  getAllApplications: async () => {
    try {
      const response = await fetch(`${API_URL}/applications/all`, {
        method: 'GET',
        headers: getAuthHeaders()
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Failed to fetch all applications');
      }
      
      return data;
    } catch (error) {
      throw error;
    }
  },

  // Update application status
  updateStatus: async (id, status) => {
    try {
      const response = await fetch(`${API_URL}/applications/${id}`, {
        method: 'PUT',
        headers: getAuthHeaders(),
        body: JSON.stringify({ status })
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Failed to update application');
      }
      
      return data;
    } catch (error) {
      throw error;
    }
  }
};

// Legacy function for backward compatibility
export async function fetchJobs() {
  // simulate network delay
  return new Promise(res => setTimeout(() => res([]), 300));
}
