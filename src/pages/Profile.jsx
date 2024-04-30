import { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

function Profile() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, [auth]);

  // Function to handle logout
  const onLogout = () => {
    auth.signOut()
      .then(() => {
        // Redirect to home page after logout
        navigate('/');
      })
      .catch((error) => {
        console.error('Logout error:', error);
      });
  };

  return user ? (
    <div className='profile'>
      <header className='profileHeader'>
        <p className='pageHeader'>My Profile</p>
        <button type='button' className='logOut' onClick={onLogout}>
          Logout
        </button>
      </header>
      {/* Display user information */}
      <div className='userData'>
        <p>Name: {user.displayName}</p>
        <p>Email: {user.email}</p>
      </div>
    </div>
  ) : null;
}

export default Profile;