import AuthContext from './AuthContext';
export const AuthProvider = AuthContext.Provider;
export const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};
export default AuthContext;
