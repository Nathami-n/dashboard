'use client';
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import {Header} from "@/components/auth/header";
import {Social} from "@/components/auth/social";
import {BackButton} from '@/components/auth/back-button';

interface ICardWrapperProps {
    children: React.ReactNode;
    showSocial?: boolean;
    headerLabel: string;
    backButtonLabel:string;
    backButtonHref: string;
 
}
export const CardWrapper: React.FC<ICardWrapperProps> = ( {
    children,
    showSocial,
    headerLabel,
    backButtonLabel,
    backButtonHref
}) => {
    return (
        <Card className="w-[400px] shadow-md">
            <CardHeader>
                <Header text={headerLabel} />
            </CardHeader>
            <CardContent>
            {children}
            </CardContent>
            {showSocial && (
                <CardFooter>
                <Social/>
                </CardFooter>
            )}
            <CardFooter>
                <BackButton
                label={backButtonLabel}
                href={backButtonHref} 
                />
            </CardFooter>
        </Card>
    )
}