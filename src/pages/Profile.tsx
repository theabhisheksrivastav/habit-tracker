import React, { useEffect, useState } from 'react';
import { getUser } from '../utils/api';

interface ProfileProps {}

const Profile: React.FC<ProfileProps> = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await getUser();
        console.log('Fetched user data:', response.data);
        setUser(response.data);
      } catch (error) {
        console.error('Failed to fetch user data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    if (!user) {
      fetchUserData();
    }
  }, []);

  if (isLoading) {
    return <div>Loading profile...</div>;
  }

  if (!user) {
    return (
      <div>
        <h2>Please Login to View Profile</h2>
        <p>You need to be logged in to access your profile information.</p>
      </div>
    );
  }

  return (
    <div>
      <h2>Profile</h2>
      <p>Name: {user.fullName}</p>
      <p>Email: {user.email}</p>
      <p>Habbits : {user.habits.length}</p>
      {/* Add other relevant user details here */}
    </div>
  );
};

export default Profile;