import diffuse from './Sofa/sofa_Diffuse.jpg';
import glossiness from './/Sofa/sofa_Glossiness.jpg';
import normal from './Sofa/sofa_Normal.jpg';
import height from './Sofa/sofa_Height.jpg';
import reflection from './Sofa/sofa_Reflection.jpg';

import leather from './CushionChair/leather.jpg';
import rough from './CushionChair/Metal/tn1_RoughMetalbyShadowRunner27_xrkse.jpg';
import a from './CushionChair/Pillow/hda017_os_a.jpg';
import a_norm from './CushionChair/Pillow/hda017_os_a_NORM.png';
import flake from './CushionChair/Wood/oak-veneer-white-quarter-cut-heavy-flake.jpg';
import flake_norm from './CushionChair/Wood/oak-veneer-white-quarter-cut-heavy-flake_NORM.png';

export const sofa_textures = [ 
    { 
        category: "Default", 
        images: [
            { name : "Diffuse", url: diffuse },
            { name: "Glossiness", url: glossiness },
            { name: "Normal", url: normal },
            { name: "Height", url: height },
            { name: "Reflection", url: reflection }
        ]

    }];

export const cushionchair_textures = [
    {
        category: "Base", 
        images: [
            { name: "Flake", url : flake },
            { name: "Flake-Normal", url: flake_norm }
        ]
    },
    {
        category: "Chair", 
        images: [
            { name : "Rough", url : rough },
            { name : "Leather", url: leather }
        ]
    },
    {
        category: "Pillow", 
        images: [
            { name : "A", url : a },
            { name : "A-Norm", url: a_norm }
        ]
    }
];

