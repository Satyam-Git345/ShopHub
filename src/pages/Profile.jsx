
import React from 'react';
import { useSelector } from 'react-redux';

export default function Profile() {
    const currentUser = useSelector((state) => state.user.currentUser);

    // User data from Redux store with fallback values
    const userDetails = {
        phone: currentUser?.mobile || currentUser?.user?.mobile || 'Not provided',
        address: currentUser?.address || currentUser?.user?.address || 'Not provided',
        memberSince: currentUser?.memberSince || currentUser?.user?.memberSince || 'Recently joined',
        orderHistory: [
            { id: '#ORD-1001', date: '2024-03-01', total: '$120.50', status: 'Delivered' },
            { id: '#ORD-1002', date: '2024-02-15', total: '$75.20', status: 'Processing' },
            { id: '#ORD-1003', date: '2024-01-20', total: '$210.00', status: 'Shipped' },
        ],
    };

    if (!currentUser) {
        return (
            <div style={{ textAlign: 'center', marginTop: '50px' }}>
                <h2>Please log in to view your profile.</h2>
            </div>
        );
    }

    return (
        <div
            style={{
                padding: '40px 20px',
                maxWidth: '1000px',
                margin: '0 auto',
                minHeight: '80vh',
            }}
        >
            <div
                style={{
                    background: '#fff',
                    borderRadius: '20px',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                    overflow: 'hidden',
                }}
            >
                {/* Header Section */}
                <div
                    style={{
                        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                        padding: '40px',
                        color: 'white',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '30px',
                        flexWrap: 'wrap',
                    }}
                >
                    <div
                        style={{
                            width: '120px',
                            height: '120px',
                            borderRadius: '50%',
                            background: 'white',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '48px',
                            fontWeight: 'bold',
                            color: '#667eea',
                            boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
                        }}
                    >
                        {(currentUser?.name || currentUser?.user?.name || 'U').charAt(0).toUpperCase()}
                    </div>
                    <div>
                        <h1 style={{ margin: 0, fontSize: '36px', fontWeight: 'bold' }}>
                            {currentUser?.name || currentUser?.user?.name || 'User'}
                        </h1>
                        <p style={{ margin: '8px 0 0', opacity: 0.9, fontSize: '18px' }}>
                            {currentUser?.email || currentUser?.user?.email || 'No email'}
                        </p>
                        <div style={{ marginTop: '16px', display: 'flex', gap: '15px' }}>
                            <span style={{ background: 'rgba(255,255,255,0.2)', padding: '5px 12px', borderRadius: '15px', fontSize: '14px' }}>
                                Member since {userDetails.memberSince}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Content Section */}
                <div style={{ padding: '40px', display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '40px' }}>

                    {/* Left Column: Personal Info */}
                    <div>
                        <h3 style={{ borderBottom: '2px solid #f3f4f6', paddingBottom: '15px', marginTop: 0 }}>
                            Personal Information
                        </h3>
                        <div style={{ marginTop: '20px' }}>
                            <p style={{ color: '#666', fontSize: '14px', marginBottom: '5px' }}>Full Name</p>
                            <p style={{ fontWeight: '600', fontSize: '16px', margin: 0 }}>{currentUser?.name || currentUser?.user?.name || 'User'}</p>
                        </div>
                        <div style={{ marginTop: '20px' }}>
                            <p style={{ color: '#666', fontSize: '14px', marginBottom: '5px' }}>Email</p>
                            <p style={{ fontWeight: '600', fontSize: '16px', margin: 0 }}>{currentUser?.email || currentUser?.user?.email || 'No email'}</p>
                        </div>
                        <div style={{ marginTop: '20px' }}>
                            <p style={{ color: '#666', fontSize: '14px', marginBottom: '5px' }}>Phone</p>
                            <p style={{ fontWeight: '600', fontSize: '16px', margin: 0 }}>{userDetails.phone}</p>
                        </div>
                        <div style={{ marginTop: '20px' }}>
                            <p style={{ color: '#666', fontSize: '14px', marginBottom: '5px' }}>Address</p>
                            <p style={{ fontWeight: '600', fontSize: '16px', margin: 0 }}>{userDetails.address}</p>
                        </div>
                        <button style={{
                            marginTop: '30px',
                            padding: '10px 20px',
                            background: '#f3f4f6',
                            border: 'none',
                            borderRadius: '8px',
                            color: '#333',
                            fontWeight: '600',
                            cursor: 'pointer',
                            transition: 'background 0.3s'
                        }}>
                            Edit Profile
                        </button>
                    </div>

                    {/* Right Column: Order History */}
                    <div>
                        <h3 style={{ borderBottom: '2px solid #f3f4f6', paddingBottom: '15px', marginTop: 0 }}>
                            Recent Orders
                        </h3>
                        <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
                            {userDetails.orderHistory.map((order) => (
                                <div
                                    key={order.id}
                                    style={{
                                        border: '1px solid #eee',
                                        borderRadius: '12px',
                                        padding: '20px',
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        transition: 'box-shadow 0.3s',
                                    }}
                                    onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.05)'}
                                    onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'none'}
                                >
                                    <div>
                                        <p style={{ fontWeight: 'bold', margin: 0, color: '#333' }}>{order.id}</p>
                                        <p style={{ fontSize: '14px', color: '#888', margin: '5px 0 0' }}>{order.date}</p>
                                    </div>
                                    <div style={{ textAlign: 'right' }}>
                                        <p style={{ fontWeight: 'bold', margin: 0, color: '#667eea' }}>{order.total}</p>
                                        <span style={{
                                            display: 'inline-block',
                                            marginTop: '5px',
                                            fontSize: '12px',
                                            padding: '4px 8px',
                                            borderRadius: '10px',
                                            background: order.status === 'Delivered' ? '#dcfce7' : order.status === 'Processing' ? '#fef9c3' : '#e0f2fe',
                                            color: order.status === 'Delivered' ? '#166534' : order.status === 'Processing' ? '#854d0e' : '#075985',
                                            fontWeight: '600'
                                        }}>
                                            {order.status}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
