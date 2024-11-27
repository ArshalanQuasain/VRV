import { FiUser, FiLogOut, FiShield, FiEye, FiEyeOff, FiAlertCircle, FiCheck, FiLock } from "react-icons/fi";

const Icons = {
  User: () => <FiUser className="w-6 h-6" />,
  Logout: () => <FiLogOut className="w-6 h-6" />,
  Shield: () => <FiShield className="w-6 h-6" />,
  Eye: () => <FiEye className="w-6 h-6" />,
  EyeOff: () => <FiEyeOff className="w-6 h-6" />,
  Alert: () => <FiAlertCircle className="w-6 h-6" />,
  Check: () => <FiCheck className="w-6 h-6" />,
  Lock: () => <FiLock className="w-6 h-6" />,
};

export default Icons;
