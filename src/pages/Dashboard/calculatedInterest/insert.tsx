import { ArrowLeftIcon } from "@heroicons/react/16/solid";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Button, Input, Select } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import { SectionTitle } from "../../../components/sectionTitle";

export const CalculedInterestInsert = () => {
  const navigate = useNavigate();

  const handleNavigateBack = () => {
    navigate(-1);
  };
  return (
    <div>
      <div className="flex items-center gap-4">
        <button onClick={handleNavigateBack} className="">
          <ArrowLeftIcon
            height={18}
            className="text-GRAY_400 hover:text-GOLD_DARK transition-all"
          />
        </button>
        <SectionTitle text="Preencha o formulário de inclusão" />
      </div>
      <form className="mt-12">
        <div className="bg-WHITE p-8 w-full rounded-md">
          <div className="flex items-center gap-4">
            <Icon height={16} icon={"heroicons:circle-stack"} color="black" />
            <SectionTitle size="sm" text="Juros" />
          </div>
          <div className="mt-8 flex flex-col gap-6 ">
            <div className="grid md:grid-cols-2 gap-6">
              <Select label="Fundo de origem">
                <option value=""></option>
              </Select>
              <Input type="number" label="Valor da readequação" />
            </div>
          </div>
        </div>
        <div className="w-full flex justify-end mt-8">
          <Button className="bg-GOLD_MAIN w-full md:w-auto">
            Adicionar Cálculo de juros
          </Button>
        </div>
      </form>
    </div>
  );
};
