
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { getRegisterError, getRegisterLoading, RegisterApi } from '../slices/userSlice';

export default function Signup() {
    const isLoading = useSelector(getRegisterLoading);
    const error = useSelector(getRegisterError);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [mobile, setMobile] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name && email && password && mobile) {
            const user = {
                name,
                email,
                password,
                mobile
            };
            dispatch(RegisterApi(user));
        }
    };

    return (
        <div
            style={{
                minHeight: '80vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: '#f3f4f6',
                padding: '20px',
            }}
        >
            <div
                style={{
                    width: '100%',
                    maxWidth: '400px',
                    background: '#ffffff',
                    borderRadius: '16px',
                    boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
                    padding: '40px',
                }}
            >
                <h2
                    style={{
                        textAlign: 'center',
                        marginBottom: '30px',
                        color: '#333',
                        fontSize: '28px',
                        fontWeight: 'bold',
                    }}
                >
                    Create Account
                </h2>
                <form onSubmit={handleSubmit}>
                    <div style={{ marginBottom: '20px' }}>
                        <label
                            style={{
                                display: 'block',
                                marginBottom: '8px',
                                color: '#666',
                                fontWeight: '500',
                            }}
                        >
                            Full Name
                        </label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter your name"
                            required
                            style={{
                                width: '100%',
                                padding: '12px 16px',
                                border: '1px solid #ddd',
                                borderRadius: '8px',
                                fontSize: '16px',
                                transition: 'border-color 0.3s',
                                outline: 'none',
                            }}
                            onFocus={(e) => (e.target.style.borderColor = '#667eea')}
                            onBlur={(e) => (e.target.style.borderColor = '#ddd')}
                        />
                    </div>
                    <div style={{ marginBottom: '20px' }}>
                        <label
                            style={{
                                display: 'block',
                                marginBottom: '8px',
                                color: '#666',
                                fontWeight: '500',
                            }}
                        >
                            Email Address
                        </label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            required
                            style={{
                                width: '100%',
                                padding: '12px 16px',
                                border: '1px solid #ddd',
                                borderRadius: '8px',
                                fontSize: '16px',
                                transition: 'border-color 0.3s',
                                outline: 'none',
                            }}
                            onFocus={(e) => (e.target.style.borderColor = '#667eea')}
                            onBlur={(e) => (e.target.style.borderColor = '#ddd')}
                        />
                    </div>


                    <div style={{ marginBottom: '20px' }}>
                        <label
                            style={{
                                display: 'block',
                                marginBottom: '8px',
                                color: '#666',
                                fontWeight: '500',
                            }}
                        >
                            Mobile
                        </label>
                        <input
                            type="text"
                            value={mobile}
                            onChange={(e) => setMobile(e.target.value)}
                            placeholder="Enter your mobile"
                            required
                            style={{
                                width: '100%',
                                padding: '12px 16px',
                                border: '1px solid #ddd',
                                borderRadius: '8px',
                                fontSize: '16px',
                                transition: 'border-color 0.3s',
                                outline: 'none',
                            }}
                            onFocus={(e) => (e.target.style.borderColor = '#667eea')}
                            onBlur={(e) => (e.target.style.borderColor = '#ddd')}
                        />
                    </div>
                    <div style={{ marginBottom: '24px' }}>
                        <label
                            style={{
                                display: 'block',
                                marginBottom: '8px',
                                color: '#666',
                                fontWeight: '500',
                            }}
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Create a password"
                            required
                            style={{
                                width: '100%',
                                padding: '12px 16px',
                                border: '1px solid #ddd',
                                borderRadius: '8px',
                                fontSize: '16px',
                                transition: 'border-color 0.3s',
                                outline: 'none',
                            }}
                            onFocus={(e) => (e.target.style.borderColor = '#667eea')}
                            onBlur={(e) => (e.target.style.borderColor = '#ddd')}
                        />
                    </div>
                    <button
                        type="submit"
                        style={{
                            width: '100%',
                            padding: '14px',
                            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                            color: '#ffffff',
                            border: 'none',
                            borderRadius: '8px',
                            fontSize: '16px',
                            fontWeight: '600',
                            cursor: 'pointer',
                            transition: 'transform 0.2s, box-shadow 0.2s',
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.transform = 'translateY(-2px)';
                            e.target.style.boxShadow = '0 5px 15px rgba(102, 126, 234, 0.4)';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.transform = 'translateY(0)';
                            e.target.style.boxShadow = 'none';
                        }}
                    >
                        Create Account
                    </button>
                </form>
                <div
                    style={{
                        textAlign: 'center',
                        marginTop: '20px',
                        color: '#666',
                    }}
                >
                    Already have an account?{' '}
                    <Link
                        to="/login"
                        style={{
                            color: '#667eea',
                            fontWeight: '600',
                            textDecoration: 'none',
                        }}
                    >
                        Sign In
                    </Link>
                </div>
            </div>
        </div>
    );
}
