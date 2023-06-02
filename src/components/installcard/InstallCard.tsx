import React, { useState } from "react";
import Card from "../card";
import Button from "../button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

type InstallCardProps = {
    disabled?: boolean;
    onClick: () => void;
};

export const InstallCard = ({
    onClick,
    disabled = false
}: InstallCardProps) => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [version, setVersion] = useState<string>();

    return (
        <Card
            className="select-card"
            footer={
                <Button onClick={onClick} disabled={disabled}>
                    <>{version ? "Upgrade" : "Install"} FluidNC</>
                </Button>
            }>
            <div className="select-icon">
                <FontAwesomeIcon
                    icon={faDownload as IconDefinition}
                    size="4x"
                />
            </div>
            <>
                <p>
                    {version ? "Upgrade" : "Install"} FluidNC on your controller
                </p>
                {version && <p>{version}</p>}
            </>
        </Card>
    );
};
