import { Outlet, useNavigate } from "react-router-dom";
const LayoutPDFMake = () => {
  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <div>Sidbar</div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};
export default LayoutPDFMake;
