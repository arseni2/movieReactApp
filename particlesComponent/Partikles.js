import React from 'react'
import Particles from "react-particles-js";

const Particless = () => {
    return <>
        <div style={{marginTop: -68+'%', zIndex: 0, }}>
            <Particles
                params = {{
                    particles: {
                        "number": {
                            "value": 100,
                            "density": {
                                "enable": true,
                                "value_area": 800
                            }},
                        "shape": {
                            "type": "circle",
                            "stroke": {
                                "width": 0,
                                "color": "#000000"
                            },
                            "polygon": {
                                "nb_sides": 5
                            },
                        },
                        "move": {
                            "enable": true,
                            "speed": 3,
                            "direction": "none",
                            "random": false,
                            "straight": false,
                            "out_mode": "out",
                            "bounce": false,
                            "attract": {
                                "enable": false,
                                "rotateX": 600,
                                "rotateY": 1200
                            }
                        },
                        color: '#000',
                        opacity: 1,
                        size: 4,
                        size_random: true,
                        nb: 150,
                        line_linked: {
                            enable_auto: true,
                            distance: 100,
                            color: '#000',
                            opacity: 1,
                            width: 1,
                        },
                        anim: {
                            enable: true,
                            speed: 1
                        }
                    },
                    interactivity: {
                        "events": {
                            "onhover": {
                                "enable": true,
                                "mode": "repulse"
                            }},
                        mouse: {
                            distance: 250
                        },
                        detect_on: 'canvas', // "canvas" or "window"
                        line_linked: {
                            opacity: .9
                        },

                    },
                    "repulse": {
                        "distance": 200,
                        "duration": 0.4
                    },
                    /* Retina Display Support */
                    retina_detect: true
                }
                }




                style={{
                    width: '100%',
                    height: '100%',
                    zIndex: -999999999999999999
                }}
            /></div>
    </>
}

export default Particless