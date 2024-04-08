import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
  AwaitedReactNode,
} from "react";

export const MyCardData = (weatherData: any) => {
  const myData = weatherData.weatherData;

  return (
    <div>
      {myData ? (
        <div className="relative text-white font-bold">
          <div className="absolute top-5 p-4 w-full h-72 flex flex-col gap-2">
            <div className="text-3xl text-center">
              <div>
                {myData ? myData.name : null},
                <span className="ml-1">
                  {myData ? myData.sys.country : null}
                </span>
              </div>
              <div>{myData ? myData.weather[0].description : null}</div>
            </div>

            <div className="text-white text-6xl text-center">
              {myData ? (myData.main.temp - 273).toFixed() : null}&#8451;
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};
