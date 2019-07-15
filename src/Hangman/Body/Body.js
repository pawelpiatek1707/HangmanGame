import React from 'react';

import {
    BodyWrapper, Head, EyeLeft, EyeRight, Neck, Core, HandLeft, HandRight, LegLeft,
    LegRight, GallowsTop, GallowsLeft, GallowsBottom,Floor
} from './style'


const body = (props) => {
    let errorCount = props.errors;
    return (
        <BodyWrapper>

                <GallowsTop/>
                <GallowsLeft/>
                <GallowsBottom/>
                <Head errorCount={errorCount}>
                    <EyeLeft errorCount={errorCount}/>
                    <EyeRight errorCount={errorCount}/>
                    <Neck/>
                </Head>
                <Core errorCount={errorCount}/>
                <HandLeft errorCount={errorCount}/>
                <HandRight errorCount={errorCount}/>
                <LegLeft errorCount={errorCount}/>
                <LegRight errorCount={errorCount}/>
                <Floor/>

        </BodyWrapper>
    );
};

export default body;