import { ChevronLeftIcon } from "@heroicons/react/16/solid";
import { Logo } from "../../components/logo/index";

export const SideImageAuthorization = () => {
  return (
      <div className="p-12 flex flex-col justify-between h-screen w-full max-w-[560px] bg-auth-side-image">
        <div className="flex items-center justify-between">
          <Logo />
          <div className="flex items-center gap-1">
            <ChevronLeftIcon className="size-4 text-WHITE" />
            <p className="text-white font-normal text-sm14 font-body">
              Voltar ao site
            </p>
          </div>
        </div>
        <div>
          <h3 className="font-display text-head32 text-white font-normal">
            Faça seu login e visualize <br /> seus rendimentos.
          </h3>
        </div>
      </div>
  );
};
