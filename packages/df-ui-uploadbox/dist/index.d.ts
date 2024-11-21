import { default as default_2 } from 'react';
import { SxProps } from '@mui/material/styles';

export declare const Uploadbox: default_2.ForwardRefExoticComponent<UploadboxProps & default_2.RefAttributes<HTMLDivElement>>;

declare interface UploadboxProps {
    title: string;
    mime: string;
    uploadedDataSize: string;
    filesize: string;
    uploadPercentage: number;
    sx?: SxProps;
    maxWidthTitle?: string;
    tooltip?: boolean;
    onlyProgress?: boolean;
    boxWidth?: string;
    hideDataSize?: boolean;
    hidePercentage?: boolean;
}

export { }
