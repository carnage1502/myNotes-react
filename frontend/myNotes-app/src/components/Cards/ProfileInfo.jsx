import PropTypes from "prop-types";
import { getInitials } from "../../utils/helper";
const ProfileInfo = ({ onLogout }) => {
  return (
    <div className="flex items-center gap-3">
      <div className="w-12 h-12 flex items-center justify-center rounded-full text-slate-950 font-medium bg-slate-100">
        {getInitials("Carnage")}
      </div>
      <div>
        <p className="test-sm font-medium">Carnage</p>
        <button className="text-sm text-slate-700 underline" onClick={onLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

ProfileInfo.propTypes = {
  onLogout: PropTypes.func,
};

export default ProfileInfo;
