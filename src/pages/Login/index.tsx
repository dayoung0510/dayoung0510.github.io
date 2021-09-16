import React, { useState } from 'react';
import { supabase } from 'supabaseClient';
import { FlexBoth } from 'components/atoms/commons/Divs';
import { Input } from 'components/atoms/commons/Inputs';

const Login: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [inputEmail, setInputEmail] = useState('');

  const handleLogin = async (email: string) => {
    try {
      setLoading(true);
      const { error } = await supabase.auth.signIn({ email });
      if (error) throw error;
      alert('Check your email for the login link!');
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <FlexBoth style={{ height: '100%' }}>
      <div>
        <div>
          <Input
            type="email"
            placeholder="Your email"
            value={inputEmail}
            onChange={(e) => setInputEmail(e.target.value)}
          />
        </div>
        <div>
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              handleLogin(inputEmail);
            }}
            disabled={loading}
          >
            {loading ? <span>Loading</span> : <span>Send magic link</span>}
          </button>
        </div>
      </div>
    </FlexBoth>
  );
};

export default Login;
