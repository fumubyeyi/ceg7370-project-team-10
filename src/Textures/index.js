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

let base_url = window.origin;

console.error()

export const sofa_textures = [ 
    { 
        category: "Default", 
        images: [
            { name : "Diffuse.jpg", url: `${base_url}${diffuse}` },
            { name: "Glossiness.jpg", url: `${base_url}${glossiness}` },
            { name: "Normal.jpg", url: `${base_url}${normal}` },
            { name: "Height.jpg", url: `${base_url}${height}` },
            { name: "Reflection.jpg", url: `${base_url}${reflection}` }
        ]
    }];

export const cushionchair_textures = [
    {
        category: "Base", 
        images: [
            { name: "Flake", url : `${base_url}${flake}` },
            { name: "Flake-Normal", url: `${base_url}${flake_norm}` }
        ]
    },
    {
        category: "Chair", 
        images: [
            { name : "Rough", url : `${base_url}${rough}` },
            { name : "Leather", url: `${base_url}${leather}` }
        ]
    },
    {
        category: "Pillow", 
        images: [
            { name : "A", url : `${base_url}${a}` },
            { name : "A-Norm", url: `${base_url}${a_norm}` }
        ]
    }
];

