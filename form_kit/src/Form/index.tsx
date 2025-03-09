import { useState } from "react";
import { Button } from "@/components/ui/button";
import Header from "./Header";
import { Headings } from "./types";
import { pages } from "./types";
import { useForm, FormProvider, FieldValues } from "react-hook-form";
import useNumberStore from "@/stores/PhoneNumberStore";
import useAddressStore from "@/stores/useAddressstore";

const CustomForm = () => {
  const methods = useForm();
  const number = useNumberStore((state) => state.phonenumber);
  const state = useAddressStore((state) => state.state)
  const country = useAddressStore((state) => state.country)
  const city = useAddressStore((state) => state.city)
  const headingLength = Object.keys(Headings).length;
  const [index, setIndex] = useState<number>(0);

  const handleNext = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIndex((prev) => {
      if (prev === headingLength - 1) {
        return prev;
      }
      return prev + 1;
    });
  };

  const handlePrev = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIndex((prev) => {
      if (prev === 0) {
        return prev;
      }
      return prev - 1;
    });
  };

  const submitHandler = (data: FieldValues) => {
    // API calls to be handled here
    data = { ...data, number, country, state, city };
    console.log("Form submitted:", data);
  };

  const Comp = pages[index].component;

  return (
    <div className="absolute inset-0 m-8">
      <div className="relative h-full">
        <div className="flex justify-center items-center flex-col gap-9">
          <Header index={index} />
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(submitHandler)} className="w-full mb-16">
              <Comp />
              <div className="fixed bottom-7 left-0 right-0 flex justify-between px-8">
                {index > 0 && (
                  <Button type="button" onClick={handlePrev} className="cursor-pointer">
                    Back
                  </Button>
                )}
                {index < headingLength - 1 ? (
                  <Button type="button" onClick={handleNext} className="cursor-pointer ml-auto">
                    Next
                  </Button>
                ) : (
                  <Button type="submit" className="cursor-pointer ml-auto">
                    Submit
                  </Button>
                )}
              </div>
            </form>
          </FormProvider>
        </div>
      </div>
    </div>
  );
};

export default CustomForm;
