import { Icon } from "@iconify/react/dist/iconify.js";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../hook/auth";
import { routesMapped } from "../../utils/route-config";
import { Logo } from "../logo";
import { PageButton } from "./PageButton";

export const SidebarLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeRoute, setActiveRoute] = useState<string>("");
  const { userData, logout } = useAuth();

  const handleLogout = () => {
    logout();
    if (userData?.role === "admin") {
      navigate("/login/admin");
    }
  };

  useEffect(() => {
    setActiveRoute(location.pathname);
  }, [location]);

  return (
    <div className="hidden md:block max-w-[280px] w-full h-screen">
      <motion.div
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{
          type: "ease",
          duration: 1,
          delay: 0.2,
        }}
        className="max-w-[280px] w-full bg-BLACK h-screen flex flex-col overflow-auto fixed left-0 top-0"
      >
        <div className="h-[72px] w-full flex items-center px-6 ">
          <div className="h-8">
            <Logo />
          </div>
        </div>
        <div className="flex-1 flex flex-col justify-between">
          <nav className="h-auto pt-5 overflow-auto">
            {routesMapped.map((route) => {
              if (userData && route.addToSidebar) {
                if (
                  route.roleAccess.includes(userData?.role) ||
                  route.roleAccess.includes("all")
                ) {
                  return (
                    <PageButton
                      key={route.path}
                      pageName={route.name}
                      icon={route.icon ? route.icon : "heroicons:circle-stack"}
                      isActive={route.path === activeRoute}
                      link={route.path}
                    />
                  );
                }
              }
            })}
          </nav>
          <button
            onClick={handleLogout}
            className="hover:opacity-65 transition-all flex items-center gap-4 px-6 h-[72px] bg-GRAY_800 text-GRAY_500 font-display font-medium text-body16 w-full z-10 mt-6"
          >
            <Icon
              color="#616161"
              icon={"heroicons:arrow-left-end-on-rectangle"}
            ></Icon>
            Logout
          </button>
        </div>
      </motion.div>
    </div>
  );
};
