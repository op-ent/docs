import React from "react";
import clsx from "clsx";
import useIsBrowser from "@docusaurus/useIsBrowser";
import { translate } from "@docusaurus/Translate";
import { Props } from "@theme/ColorModeToggle";
import { Switch } from "@headlessui/react";
import { SunIcon, MoonIcon } from "@heroicons/react/solid";
function ColorModeToggle({ value, onChange }: Props) {
  const isBrowser = useIsBrowser();
  const title = translate(
    {
      message: "Switch between dark and light mode (currently {mode})",
      id: "theme.colorToggle.ariaLabel",
      description: "The ARIA label for the navbar color mode toggle",
    },
    {
      mode:
        value === "dark"
          ? translate({
              message: "dark mode",
              id: "theme.colorToggle.ariaLabel.mode.dark",
              description: "The name for the dark color mode",
            })
          : translate({
              message: "light mode",
              id: "theme.colorToggle.ariaLabel.mode.light",
              description: "The name for the light color mode",
            }),
    }
  );

  const enabled = value === "dark";
  const setEnabled = (checked: boolean) => onChange(checked ? "dark" : "light");
  return (
    <Switch
      checked={enabled}
      onChange={setEnabled}
      className={clsx(
        enabled ? "bg-primary" : "bg-gray-300",
        "p-0 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:cursor-not-allowed dark:ring-offset-[color:var(--ifm-navbar-background-color)]"
      )}
      disabled={!isBrowser}
      title={title}
      aria-label={title}
    >
      <span
        className={clsx(
          enabled ? "translate-x-5" : "translate-x-0",
          "pointer-events-none relative inline-block h-5 w-5 rounded-full bg-[color:var(--ifm-navbar-background-color)] shadow transform ring-0 transition ease-in-out duration-200"
        )}
      >
        <span
          className={clsx(
            enabled
              ? "opacity-0 ease-out duration-100"
              : "opacity-100 ease-in duration-200",
            "absolute inset-0 h-full w-full flex items-center justify-center transition-opacity"
          )}
          aria-hidden="true"
        >
          <SunIcon className="h-3 w-3 text-gray-500" />
        </span>
        <span
          className={clsx(
            enabled
              ? "opacity-100 ease-in duration-200"
              : "opacity-0 ease-out duration-100",
            "absolute inset-0 h-full w-full flex items-center justify-center transition-opacity"
          )}
          aria-hidden="true"
        >
          <MoonIcon className="h-3 w-3 text-primary" />
        </span>
      </span>
    </Switch>
  );
}
export default React.memo(ColorModeToggle);
