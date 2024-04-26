import ProfileInfo from "./Cards/ProfileInfo";
import { useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar/SearchBar";
import { useState } from "react";
import PropTypes from "prop-types";

const Navbar = ({ userInfo }) => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const onLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  const handleSearch = () => {};
  const onClearSearch = () => {
    setSearch("");
  };
  return (
    <div className="bg-white flex items-center justify-between px-6 py-2 drop-shadow">
      <h2 className="text-xl font-semibold text-black py-2">My Notes!</h2>

      <SearchBar
        value={search}
        onChange={({ target }) => {
          setSearch(target.value);
        }}
        handleSearch={handleSearch}
        onClearSearch={onClearSearch}
      />
      <ProfileInfo userInfo={userInfo} onLogout={onLogout} />
    </div>
  );
};

Navbar.propTypes = {
  userInfo: PropTypes.object,
};
export default Navbar;
