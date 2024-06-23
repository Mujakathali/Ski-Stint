import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../assets/N.css';
import logoImage from '../images/SKI-Coimbatore-Logo.webp'; 
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import LogoutIcon from '@mui/icons-material/Logout';

const SideNavbar = () => {
  const [isOpen, setIsOpen] = useState(true);


  const toggleNavbar = () => {
    setIsOpen(isOpen);
    document.body.classList.toggle('body-shift');
  };

  return (
    <>
      <div className={`sidenavbar ${isOpen ? 'open' : ''}`}>
        {/* Image added here */}
        <div className="navbar-image-container">
          <img src={logoImage} alt="Logo" className="navbar-logo" />
        </div>
        
        <br/>
        <br/>
        <div className='menu-bar'>
        <Link to="/" className="nav-link "><svg  width="20" height="20"  viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 0.625C0 0.279822 0.279822 0 0.625 0H19.375C19.7202 0 20 0.279822 20 0.625V19.375C20 19.7202 19.7202 20 19.375 20H0.625C0.279822 20 0 19.7202 0 19.375V0.625ZM1.5625 1.5625V18.4375H18.4375V1.5625H1.5625Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.4688 3.4375C10.6413 3.4375 10.7812 3.57741 10.7812 3.75V16.25C10.7812 16.4226 10.6413 16.5625 10.4688 16.5625H9.53125C9.35866 16.5625 9.21875 16.4226 9.21875 16.25V3.75C9.21875 3.57741 9.35866 3.4375 9.53125 3.4375H10.4688ZM5.625 7.8125C5.79759 7.8125 5.9375 7.95241 5.9375 8.125V16.25C5.9375 16.4226 5.79759 16.5625 5.625 16.5625H4.6875C4.51491 16.5625 4.375 16.4226 4.375 16.25V8.125C4.375 7.95241 4.51491 7.8125 4.6875 7.8125H5.625ZM15.3125 10.9375C15.4851 10.9375 15.625 11.0774 15.625 11.25V16.25C15.625 16.4226 15.4851 16.5625 15.3125 16.5625H14.375C14.2024 16.5625 14.0625 16.4226 14.0625 16.25V11.25C14.0625 11.0774 14.2024 10.9375 14.375 10.9375H15.3125Z" fill="white"/>
</svg> Dashboard</Link>
        <Link to="/taskboard" className="nav-link active"><svg className='mm' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 0.714286C0 0.319797 0.248731 0 0.555556 0H19.4444C19.7513 0 20 0.319796 20 0.714285V19.2857C20 19.6802 19.7513 20 19.4444 20H0.555556C0.248731 20 0 19.6802 0 19.2857V0.714286ZM1.38889 1.78571V5.35714H18.6111V1.78571H1.38889ZM18.6111 7.14286H13.7847V18.2143H18.6111V7.14286ZM12.3958 18.2143V7.14286H7.60417V18.2143H12.3958ZM6.21528 18.2143V7.14286H1.38889V18.2143H6.21528Z" fill="white"/>
</svg> Taskboard</Link>
        <Link to="/userpage" className="nav-link "><svg className='mm' width="23" height="18" viewBox="0 0 23 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.50931 0.440525C5.54204 -0.0303243 6.70643 -0.127174 7.80276 0.166588C8.33623 0.30953 8.65281 0.857867 8.50987 1.39133C8.36693 1.9248 7.81859 2.24138 7.28513 2.09844C6.63729 1.92485 5.94925 1.98208 5.33899 2.26031C4.72874 2.53854 4.23431 3.02043 3.9405 3.62334C3.64668 4.22624 3.5718 4.91259 3.72869 5.56467C3.88558 6.21675 4.26447 6.79392 4.80036 7.1972C5.0911 7.41599 5.24005 7.77542 5.1893 8.13573C5.13854 8.49603 4.89609 8.80033 4.55623 8.93028C3.87688 9.19004 3.2528 9.59126 2.72863 10.1154C2.55204 10.292 2.38944 10.4799 2.24151 10.6774C1.93328 11.0889 1.95338 11.4336 2.11559 11.7423C2.30714 12.1068 2.74726 12.4847 3.36982 12.6806C3.89665 12.8463 4.18939 13.4077 4.02366 13.9345C3.85793 14.4614 3.2965 14.7541 2.76967 14.5884C1.74787 14.267 0.829116 13.5936 0.34516 12.6727C-0.168126 11.6959 -0.140151 10.521 0.640769 9.4784C0.845403 9.2052 1.07029 8.94534 1.31442 8.70122C1.69083 8.32481 2.10452 7.99423 2.5468 7.7131C2.19081 7.21007 1.93047 6.64053 1.78418 6.03252C1.51868 4.929 1.6454 3.76749 2.14262 2.74719C2.63984 1.72688 3.47657 0.911375 4.50931 0.440525ZM17.3006 2.26031C16.6903 1.98208 16.0023 1.92485 15.3545 2.09844C14.821 2.24138 14.2727 1.9248 14.1297 1.39133C13.9868 0.857867 14.3034 0.30953 14.8368 0.166588C15.9332 -0.127174 17.0975 -0.0303243 18.1303 0.440525C19.163 0.911375 19.9998 1.72688 20.497 2.74719C20.9942 3.76749 21.1209 4.929 20.8554 6.03252C20.7091 6.64053 20.4488 7.21007 20.0928 7.7131C20.5351 7.99423 20.9488 8.32481 21.3252 8.70122C21.5693 8.94534 21.7942 9.2052 21.9988 9.4784C22.7797 10.521 22.8077 11.6959 22.2944 12.6727C21.8105 13.5936 20.8917 14.267 19.8699 14.5884C19.3431 14.7541 18.7817 14.4614 18.6159 13.9345C18.4502 13.4077 18.7429 12.8463 19.2698 12.6806C19.8923 12.4847 20.3325 12.1068 20.524 11.7423C20.6862 11.4336 20.7063 11.0889 20.3981 10.6774C20.2502 10.4799 20.0876 10.292 19.911 10.1154C19.3868 9.59126 18.7627 9.19004 18.0834 8.93028C17.7435 8.80033 17.501 8.49603 17.4503 8.13573C17.3995 7.77542 17.5485 7.41599 17.8392 7.1972C18.3751 6.79392 18.754 6.21675 18.9109 5.56467C19.0678 4.91259 18.9929 4.22624 18.6991 3.62334C18.4053 3.02043 17.9109 2.53854 17.3006 2.26031ZM11.3199 4C9.72443 4 8.43103 5.2934 8.43103 6.88889C8.43103 8.48439 9.72447 9.77783 11.3199 9.77783C12.9154 9.77783 14.2088 8.4844 14.2088 6.88889C14.2088 5.2934 12.9154 4 11.3199 4ZM14.5633 10.5471C15.5727 9.65145 16.2088 8.34444 16.2088 6.88889C16.2088 4.18883 14.02 2 11.3199 2C8.61986 2 6.43104 4.18883 6.43104 6.88889C6.43104 8.34445 7.06714 9.65146 8.07654 10.5471C7.39375 10.8902 6.76355 11.3427 6.21306 11.8932C5.96893 12.1373 5.74405 12.3972 5.53941 12.6704C5.08079 13.2826 4.86482 13.9651 4.90285 14.6538C4.94029 15.3319 5.21922 15.939 5.61798 16.4291C6.40267 17.3936 7.71839 18.0001 9.09772 18.0001H13.5422C14.9215 18.0001 16.2372 17.3936 17.0219 16.4291C17.4207 15.939 17.6996 15.3319 17.737 14.6538C17.7751 13.9651 17.5591 13.2826 17.1005 12.6704C16.8958 12.3972 16.671 12.1373 16.4268 11.8932C15.8763 11.3427 15.2461 10.8902 14.5633 10.5471ZM11.3199 11.7778C9.93493 11.7778 8.60663 12.328 7.62728 13.3074C7.45069 13.484 7.28809 13.6719 7.14016 13.8694C6.93659 14.1411 6.89006 14.367 6.89981 14.5435C6.91014 14.7306 6.98925 14.9455 7.16939 15.1669C7.54248 15.6255 8.26792 16.0001 9.09772 16.0001H13.5422C14.372 16.0001 15.0974 15.6255 15.4705 15.1669C15.6506 14.9455 15.7298 14.7306 15.7401 14.5435C15.7498 14.367 15.7033 14.1411 15.4997 13.8694C15.3518 13.6719 15.1892 13.484 15.0126 13.3074C14.0333 12.328 12.705 11.7778 11.3199 11.7778Z" fill="white"/>
</svg> Users</Link>
        <Link to="/report" className="nav-link "><svg className='mm' width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.3722 2.86185L16.5322 1.34202C16.0174 0.915137 15.4051 0.576728 14.7307 0.346375C14.0563 0.116022 13.3332 -0.00170132 12.6033 1.85766e-05H5.55555C4.08267 0.00147411 2.67062 0.484827 1.62913 1.34405C0.587646 2.20328 0.00176428 3.36822 0 4.58335V17.4167C0.00176428 18.6318 0.587646 19.7967 1.62913 20.656C2.67062 21.5152 4.08267 21.9985 5.55555 22H14.4444C15.9173 21.9985 17.3294 21.5152 18.3709 20.656C19.4123 19.7967 19.9982 18.6318 20 17.4167V6.10226C20.0018 5.50018 19.8588 4.90378 19.5794 4.34757C19.3 3.79136 18.8897 3.28638 18.3722 2.86185ZM16.8011 4.15801C16.9587 4.28756 17.0998 4.43008 17.2222 4.58335H14.4444V2.29168C14.6299 2.39373 14.8029 2.51038 14.9611 2.64002L16.8011 4.15801ZM17.7778 17.4167C17.7778 18.146 17.4266 18.8455 16.8015 19.3612C16.1763 19.8769 15.3285 20.1667 14.4444 20.1667H5.55555C4.6715 20.1667 3.82365 19.8769 3.19853 19.3612C2.57341 18.8455 2.22222 18.146 2.22222 17.4167V4.58335C2.22222 3.854 2.57341 3.15453 3.19853 2.63881C3.82365 2.12308 4.6715 1.83335 5.55555 1.83335H12.2222V4.58335C12.2222 5.06958 12.4563 5.53589 12.8731 5.87971C13.2898 6.22353 13.8551 6.41668 14.4444 6.41668H17.7778V17.4167ZM14.4444 8.25001C14.7391 8.25001 15.0217 8.34659 15.2301 8.5185C15.4385 8.6904 15.5555 8.92356 15.5555 9.16668C15.5555 9.40979 15.4385 9.64295 15.2301 9.81486C15.0217 9.98677 14.7391 10.0833 14.4444 10.0833H5.55555C5.26087 10.0833 4.97825 9.98677 4.76988 9.81486C4.5615 9.64295 4.44444 9.40979 4.44444 9.16668C4.44444 8.92356 4.5615 8.6904 4.76988 8.5185C4.97825 8.34659 5.26087 8.25001 5.55555 8.25001H14.4444ZM15.5555 12.8333C15.5555 13.0765 15.4385 13.3096 15.2301 13.4815C15.0217 13.6534 14.7391 13.75 14.4444 13.75H5.55555C5.26087 13.75 4.97825 13.6534 4.76988 13.4815C4.5615 13.3096 4.44444 13.0765 4.44444 12.8333C4.44444 12.5902 4.5615 12.3571 4.76988 12.1852C4.97825 12.0133 5.26087 11.9167 5.55555 11.9167H14.4444C14.7391 11.9167 15.0217 12.0133 15.2301 12.1852C15.4385 12.3571 15.5555 12.5902 15.5555 12.8333ZM15.3422 15.9619C15.5149 16.158 15.5865 16.4024 15.5413 16.6419C15.4962 16.8814 15.3379 17.0963 15.1011 17.2398C13.9753 17.9016 12.642 18.2813 11.2611 18.3333C10.4543 18.3301 9.67201 18.1042 9.03888 17.6917C8.67444 17.4854 8.53555 17.4167 8.2611 17.4167C7.51825 17.5115 6.81735 17.7621 6.22555 18.1445C5.99083 18.2825 5.70026 18.3399 5.41521 18.3045C5.13016 18.2691 4.87294 18.1437 4.69787 17.9548C4.5228 17.7659 4.44358 17.5282 4.47694 17.292C4.5103 17.0558 4.65363 16.8395 4.87666 16.6888C5.85575 16.0618 7.03142 15.6783 8.26555 15.5833C9.0057 15.5931 9.72124 15.8042 10.3011 16.1838C10.5654 16.3799 10.9057 16.492 11.2611 16.5C12.1696 16.4439 13.0433 16.1878 13.7911 15.7584C14.0295 15.6158 14.3269 15.5572 14.6177 15.5953C14.9086 15.6335 15.1691 15.7653 15.3422 15.9619Z" fill="white"/>
</svg> Report</Link>

<br/> 

<br/>
        
<div className='bbb'>
<svg width="278" height="2" viewBox="0 0 278 2" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M278 2L0 2L0 0L278 0V2Z" fill="white"/>
</svg>

<Link to="/report" className="nav-link"><LogoutIcon/> Logout </Link>




      </div>
      </div>
      </div>
    </>
  );
};

export default SideNavbar;
