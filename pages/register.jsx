import React, {useEffect} from 'react';
import {useRouter} from "next/router";

import Base from "../src/components/shared/Base";

const RegisterPage = () => {
    const router = useRouter();

    useEffect(() => {
        router.push('https://app.traboda.com/contest/uae-ctf');
    }, []);

    return <Base meta={{ title: 'Register for UAE CTF 2021' }}>
        <h1>Please wait while we redirect you.</h1>,
    </Base>;
};

export default RegisterPage;