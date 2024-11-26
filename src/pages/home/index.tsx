import { ChangeEvent, useRef, useState } from "react";
import { PrimaryButton } from "../../components/ui/button";
import Camera from "../../components/camera";
import { getFunctions, httpsCallable } from "firebase/functions";
import { onExtractBillInfo } from "../../utils/extractText";
import { textAnnotationsType } from "../../type";

export default function HomePage() {
    const [file, setFile] = useState<File>();
    const inputRef= useRef<HTMLInputElement>(null);
    const [isCameraOpen, setIsCameraOpen] = useState<boolean>(false);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const pageRef = useRef<HTMLDivElement>(null);

    const functions = getFunctions();
    const addMessage = httpsCallable(functions, 'helloWorld');

    function onSelectInput() {
        if (inputRef.current) {
            inputRef.current.click()
        }
    }

    const ann: textAnnotationsType[] = [
        {
            "locations": [],
            "properties": [],
            "mid": "",
            "locale": "en",
            "description": "90643-29828\nGSTIN/UIN\nState Name\n:19ACIPA3166D1ZX\n: West Bengal, Code: 19\nBill of Lading/LR-RR No.\nTerms of Delivery\nDestination\nRAJGANJ\nMotor Vehicle No.\nWB73E1645\nSI\nNo.\nDescription of Goods\nHSN/SAC Quantity\nRate\nper Disc. %\nAmount\n1 500 Ltr. 5 Layer Colour Tank (J)\n2 500 Ltr. 3 Layer Colour Tank (J)\n3 500 Ltr. 2 Layer Colour Tank (J)\n4 750 Ltr. 3 Layer Colour Tank (J)\n39251000 500.00 Ltr\n(1.00 Ps)\n39251000 1,000.00 Ltr\n(2.00 Ps)\n39251000 1,000.00 Ltr\n(2.00 Ps)\n39251000 750.00 Ltr\n(1.00 Ps)\n5.68\nLtr\n2,838.98\n3.81\nLtr\n3,813.56\n3.31\nLtr\n3,305.08\n3.81\nLtr\n2,860.17\n12,817.79\nLess:\nGST:CGST OUTPUT\nGST: SGST OUTPUT\nRounded Off (+/-)\n1,153.61\n1,153.61\n(-)0.01\nTotal\n3,250.00 Ltr\nAmount Chargeable (in words)\nINR Fifteen Thousand One Hundred Twenty Five Only\nHSN/SAC\nTaxable\n15,125.00\nE.&O.E\nCentral Tax\nState Tax\nTotal",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 203,
                        "y": 0
                    },
                    {
                        "x": 3749,
                        "y": 0
                    },
                    {
                        "x": 3749,
                        "y": 3031
                    },
                    {
                        "x": 203,
                        "y": 3031
                    }
                ],
                "normalizedVertices": []
            }
        },
        {
            "locations": [],
            "properties": [],
            "mid": "",
            "locale": "",
            "description": "90643-29828",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 282,
                        "y": 53
                    },
                    {
                        "x": 728,
                        "y": 57
                    },
                    {
                        "x": 728,
                        "y": 108
                    },
                    {
                        "x": 282,
                        "y": 104
                    }
                ],
                "normalizedVertices": []
            }
        },
        {
            "locations": [],
            "properties": [],
            "mid": "",
            "locale": "",
            "description": "GSTIN",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 292,
                        "y": 138
                    },
                    {
                        "x": 503,
                        "y": 138
                    },
                    {
                        "x": 503,
                        "y": 185
                    },
                    {
                        "x": 292,
                        "y": 185
                    }
                ],
                "normalizedVertices": []
            }
        },
        {
            "locations": [],
            "properties": [],
            "mid": "",
            "locale": "",
            "description": "/",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 522,
                        "y": 138
                    },
                    {
                        "x": 545,
                        "y": 138
                    },
                    {
                        "x": 545,
                        "y": 185
                    },
                    {
                        "x": 522,
                        "y": 185
                    }
                ],
                "normalizedVertices": []
            }
        },
        {
            "locations": [],
            "properties": [],
            "mid": "",
            "locale": "",
            "description": "UIN",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 547,
                        "y": 138
                    },
                    {
                        "x": 658,
                        "y": 138
                    },
                    {
                        "x": 658,
                        "y": 185
                    },
                    {
                        "x": 547,
                        "y": 185
                    }
                ],
                "normalizedVertices": []
            }
        },
        {
            "locations": [],
            "properties": [],
            "mid": "",
            "locale": "",
            "description": "State",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 303,
                        "y": 214
                    },
                    {
                        "x": 478,
                        "y": 216
                    },
                    {
                        "x": 477,
                        "y": 265
                    },
                    {
                        "x": 302,
                        "y": 263
                    }
                ],
                "normalizedVertices": []
            }
        },
        {
            "locations": [],
            "properties": [],
            "mid": "",
            "locale": "",
            "description": "Name",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 500,
                        "y": 217
                    },
                    {
                        "x": 699,
                        "y": 219
                    },
                    {
                        "x": 698,
                        "y": 267
                    },
                    {
                        "x": 499,
                        "y": 265
                    }
                ],
                "normalizedVertices": []
            }
        },
        {
            "locations": [],
            "properties": [],
            "mid": "",
            "locale": "",
            "description": ":",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 858,
                        "y": 143
                    },
                    {
                        "x": 876,
                        "y": 143
                    },
                    {
                        "x": 875,
                        "y": 194
                    },
                    {
                        "x": 857,
                        "y": 194
                    }
                ],
                "normalizedVertices": []
            }
        },
        {
            "locations": [],
            "properties": [],
            "mid": "",
            "locale": "",
            "description": "19ACIPA3166D1ZX",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 917,
                        "y": 143
                    },
                    {
                        "x": 1585,
                        "y": 155
                    },
                    {
                        "x": 1584,
                        "y": 207
                    },
                    {
                        "x": 916,
                        "y": 195
                    }
                ],
                "normalizedVertices": []
            }
        },
        {
            "locations": [],
            "properties": [],
            "mid": "",
            "locale": "",
            "description": ":",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 864,
                        "y": 222
                    },
                    {
                        "x": 887,
                        "y": 222
                    },
                    {
                        "x": 886,
                        "y": 283
                    },
                    {
                        "x": 863,
                        "y": 283
                    }
                ],
                "normalizedVertices": []
            }
        },
        {
            "locations": [],
            "properties": [],
            "mid": "",
            "locale": "",
            "description": "West",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 912,
                        "y": 222
                    },
                    {
                        "x": 1097,
                        "y": 226
                    },
                    {
                        "x": 1096,
                        "y": 288
                    },
                    {
                        "x": 911,
                        "y": 284
                    }
                ],
                "normalizedVertices": []
            }
        },
        {
            "locations": [],
            "properties": [],
            "mid": "",
            "locale": "",
            "description": "Bengal",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 1117,
                        "y": 226
                    },
                    {
                        "x": 1353,
                        "y": 231
                    },
                    {
                        "x": 1352,
                        "y": 293
                    },
                    {
                        "x": 1116,
                        "y": 288
                    }
                ],
                "normalizedVertices": []
            }
        },
        {
            "locations": [],
            "properties": [],
            "mid": "",
            "locale": "",
            "description": ",",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 1353,
                        "y": 231
                    },
                    {
                        "x": 1371,
                        "y": 231
                    },
                    {
                        "x": 1370,
                        "y": 292
                    },
                    {
                        "x": 1352,
                        "y": 292
                    }
                ],
                "normalizedVertices": []
            }
        },
        {
            "locations": [],
            "properties": [],
            "mid": "",
            "locale": "",
            "description": "Code",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 1394,
                        "y": 232
                    },
                    {
                        "x": 1577,
                        "y": 236
                    },
                    {
                        "x": 1576,
                        "y": 297
                    },
                    {
                        "x": 1393,
                        "y": 293
                    }
                ],
                "normalizedVertices": []
            }
        },
        {
            "locations": [],
            "properties": [],
            "mid": "",
            "locale": "",
            "description": ":",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 1596,
                        "y": 236
                    },
                    {
                        "x": 1616,
                        "y": 236
                    },
                    {
                        "x": 1615,
                        "y": 297
                    },
                    {
                        "x": 1595,
                        "y": 297
                    }
                ],
                "normalizedVertices": []
            }
        },
        {
            "locations": [],
            "properties": [],
            "mid": "",
            "locale": "",
            "description": "19",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 1642,
                        "y": 237
                    },
                    {
                        "x": 1719,
                        "y": 239
                    },
                    {
                        "x": 1718,
                        "y": 300
                    },
                    {
                        "x": 1641,
                        "y": 298
                    }
                ],
                "normalizedVertices": []
            }
        },
        {
            "locations": [],
            "properties": [],
            "mid": "",
            "locale": "",
            "description": "Bill",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 2097,
                        "y": 158
                    },
                    {
                        "x": 2185,
                        "y": 159
                    },
                    {
                        "x": 2184,
                        "y": 216
                    },
                    {
                        "x": 2096,
                        "y": 215
                    }
                ],
                "normalizedVertices": []
            }
        },
        {
            "locations": [],
            "properties": [],
            "mid": "",
            "locale": "",
            "description": "of",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 2205,
                        "y": 160
                    },
                    {
                        "x": 2267,
                        "y": 161
                    },
                    {
                        "x": 2266,
                        "y": 217
                    },
                    {
                        "x": 2204,
                        "y": 216
                    }
                ],
                "normalizedVertices": []
            }
        },
        {
            "locations": [],
            "properties": [],
            "mid": "",
            "locale": "",
            "description": "Lading",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 2281,
                        "y": 160
                    },
                    {
                        "x": 2481,
                        "y": 163
                    },
                    {
                        "x": 2480,
                        "y": 220
                    },
                    {
                        "x": 2280,
                        "y": 217
                    }
                ],
                "normalizedVertices": []
            }
        },
        {
            "locations": [],
            "properties": [],
            "mid": "",
            "locale": "",
            "description": "/",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 2485,
                        "y": 163
                    },
                    {
                        "x": 2508,
                        "y": 163
                    },
                    {
                        "x": 2507,
                        "y": 219
                    },
                    {
                        "x": 2484,
                        "y": 219
                    }
                ],
                "normalizedVertices": []
            }
        },
        {
            "locations": [],
            "properties": [],
            "mid": "",
            "locale": "",
            "description": "LR",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 2509,
                        "y": 164
                    },
                    {
                        "x": 2591,
                        "y": 165
                    },
                    {
                        "x": 2590,
                        "y": 221
                    },
                    {
                        "x": 2508,
                        "y": 220
                    }
                ],
                "normalizedVertices": []
            }
        },
        {
            "locations": [],
            "properties": [],
            "mid": "",
            "locale": "",
            "description": "-",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 2590,
                        "y": 165
                    },
                    {
                        "x": 2613,
                        "y": 165
                    },
                    {
                        "x": 2612,
                        "y": 221
                    },
                    {
                        "x": 2589,
                        "y": 221
                    }
                ],
                "normalizedVertices": []
            }
        },
        {
            "locations": [],
            "properties": [],
            "mid": "",
            "locale": "",
            "description": "RR",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 2617,
                        "y": 165
                    },
                    {
                        "x": 2712,
                        "y": 166
                    },
                    {
                        "x": 2711,
                        "y": 222
                    },
                    {
                        "x": 2616,
                        "y": 221
                    }
                ],
                "normalizedVertices": []
            }
        },
        {
            "locations": [],
            "properties": [],
            "mid": "",
            "locale": "",
            "description": "No.",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 2733,
                        "y": 166
                    },
                    {
                        "x": 2832,
                        "y": 167
                    },
                    {
                        "x": 2831,
                        "y": 224
                    },
                    {
                        "x": 2732,
                        "y": 223
                    }
                ],
                "normalizedVertices": []
            }
        },
        {
            "locations": [],
            "properties": [],
            "mid": "",
            "locale": "",
            "description": "Terms",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 2090,
                        "y": 335
                    },
                    {
                        "x": 2270,
                        "y": 341
                    },
                    {
                        "x": 2268,
                        "y": 390
                    },
                    {
                        "x": 2088,
                        "y": 384
                    }
                ],
                "normalizedVertices": []
            }
        },
        {
            "locations": [],
            "properties": [],
            "mid": "",
            "locale": "",
            "description": "of",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 2293,
                        "y": 341
                    },
                    {
                        "x": 2352,
                        "y": 343
                    },
                    {
                        "x": 2350,
                        "y": 392
                    },
                    {
                        "x": 2291,
                        "y": 390
                    }
                ],
                "normalizedVertices": []
            }
        },
        {
            "locations": [],
            "properties": [],
            "mid": "",
            "locale": "",
            "description": "Delivery",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 2367,
                        "y": 343
                    },
                    {
                        "x": 2603,
                        "y": 351
                    },
                    {
                        "x": 2601,
                        "y": 401
                    },
                    {
                        "x": 2365,
                        "y": 393
                    }
                ],
                "normalizedVertices": []
            }
        },
        {
            "locations": [],
            "properties": [],
            "mid": "",
            "locale": "",
            "description": "Destination",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 2972,
                        "y": 0
                    },
                    {
                        "x": 3314,
                        "y": 1
                    },
                    {
                        "x": 3314,
                        "y": 42
                    },
                    {
                        "x": 2972,
                        "y": 39
                    }
                ],
                "normalizedVertices": []
            }
        },
        {
            "locations": [],
            "properties": [],
            "mid": "",
            "locale": "",
            "description": "RAJGANJ",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 2963,
                        "y": 88
                    },
                    {
                        "x": 3320,
                        "y": 94
                    },
                    {
                        "x": 3319,
                        "y": 146
                    },
                    {
                        "x": 2962,
                        "y": 140
                    }
                ],
                "normalizedVertices": []
            }
        },
        {
            "locations": [],
            "properties": [],
            "mid": "",
            "locale": "",
            "description": "Motor",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 2952,
                        "y": 170
                    },
                    {
                        "x": 3129,
                        "y": 174
                    },
                    {
                        "x": 3128,
                        "y": 220
                    },
                    {
                        "x": 2951,
                        "y": 216
                    }
                ],
                "normalizedVertices": []
            }
        },
        {
            "locations": [],
            "properties": [],
            "mid": "",
            "locale": "",
            "description": "Vehicle",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 3144,
                        "y": 174
                    },
                    {
                        "x": 3365,
                        "y": 178
                    },
                    {
                        "x": 3364,
                        "y": 224
                    },
                    {
                        "x": 3143,
                        "y": 220
                    }
                ],
                "normalizedVertices": []
            }
        },
        {
            "locations": [],
            "properties": [],
            "mid": "",
            "locale": "",
            "description": "No.",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 3386,
                        "y": 179
                    },
                    {
                        "x": 3483,
                        "y": 181
                    },
                    {
                        "x": 3482,
                        "y": 226
                    },
                    {
                        "x": 3385,
                        "y": 224
                    }
                ],
                "normalizedVertices": []
            }
        },
        {
            "locations": [],
            "properties": [],
            "mid": "",
            "locale": "",
            "description": "WB73E1645",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 2939,
                        "y": 268
                    },
                    {
                        "x": 3364,
                        "y": 274
                    },
                    {
                        "x": 3363,
                        "y": 323
                    },
                    {
                        "x": 2938,
                        "y": 317
                    }
                ],
                "normalizedVertices": []
            }
        },
        {
            "locations": [],
            "properties": [],
            "mid": "",
            "locale": "",
            "description": "SI",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 415,
                        "y": 719
                    },
                    {
                        "x": 482,
                        "y": 719
                    },
                    {
                        "x": 482,
                        "y": 760
                    },
                    {
                        "x": 415,
                        "y": 760
                    }
                ],
                "normalizedVertices": []
            }
        },
        {
            "locations": [],
            "properties": [],
            "mid": "",
            "locale": "",
            "description": "No.",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 431,
                        "y": 788
                    },
                    {
                        "x": 497,
                        "y": 788
                    },
                    {
                        "x": 497,
                        "y": 827
                    },
                    {
                        "x": 431,
                        "y": 827
                    }
                ],
                "normalizedVertices": []
            }
        },
        {
            "locations": [],
            "properties": [],
            "mid": "",
            "locale": "",
            "description": "Description",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 890,
                        "y": 725
                    },
                    {
                        "x": 1161,
                        "y": 728
                    },
                    {
                        "x": 1160,
                        "y": 775
                    },
                    {
                        "x": 889,
                        "y": 772
                    }
                ],
                "normalizedVertices": []
            }
        },
        {
            "locations": [],
            "properties": [],
            "mid": "",
            "locale": "",
            "description": "of",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 1182,
                        "y": 729
                    },
                    {
                        "x": 1230,
                        "y": 730
                    },
                    {
                        "x": 1229,
                        "y": 776
                    },
                    {
                        "x": 1181,
                        "y": 775
                    }
                ],
                "normalizedVertices": []
            }
        },
        {
            "locations": [],
            "properties": [],
            "mid": "",
            "locale": "",
            "description": "Goods",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 1239,
                        "y": 729
                    },
                    {
                        "x": 1402,
                        "y": 731
                    },
                    {
                        "x": 1401,
                        "y": 778
                    },
                    {
                        "x": 1238,
                        "y": 776
                    }
                ],
                "normalizedVertices": []
            }
        },
        {
            "locations": [],
            "properties": [],
            "mid": "",
            "locale": "",
            "description": "HSN",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 1871,
                        "y": 735
                    },
                    {
                        "x": 1990,
                        "y": 738
                    },
                    {
                        "x": 1989,
                        "y": 786
                    },
                    {
                        "x": 1870,
                        "y": 783
                    }
                ],
                "normalizedVertices": []
            }
        },
        {
            "locations": [],
            "properties": [],
            "mid": "",
            "locale": "",
            "description": "/",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 1999,
                        "y": 738
                    },
                    {
                        "x": 2018,
                        "y": 738
                    },
                    {
                        "x": 2017,
                        "y": 785
                    },
                    {
                        "x": 1998,
                        "y": 785
                    }
                ],
                "normalizedVertices": []
            }
        },
        {
            "locations": [],
            "properties": [],
            "mid": "",
            "locale": "",
            "description": "SAC",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 2019,
                        "y": 739
                    },
                    {
                        "x": 2139,
                        "y": 742
                    },
                    {
                        "x": 2138,
                        "y": 789
                    },
                    {
                        "x": 2018,
                        "y": 786
                    }
                ],
                "normalizedVertices": []
            }
        },
        {
            "locations": [],
            "properties": [],
            "mid": "",
            "locale": "",
            "description": "Quantity",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 2211,
                        "y": 743
                    },
                    {
                        "x": 2447,
                        "y": 748
                    },
                    {
                        "x": 2446,
                        "y": 796
                    },
                    {
                        "x": 2210,
                        "y": 791
                    }
                ],
                "normalizedVertices": []
            }
        },
        {
            "locations": [],
            "properties": [],
            "mid": "",
            "locale": "",
            "description": "Rate",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 2583,
                        "y": 752
                    },
                    {
                        "x": 2712,
                        "y": 754
                    },
                    {
                        "x": 2711,
                        "y": 790
                    },
                    {
                        "x": 2582,
                        "y": 788
                    }
                ],
                "normalizedVertices": []
            }
        },
        {
            "locations": [],
            "properties": [],
            "mid": "",
            "locale": "",
            "description": "per",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 2837,
                        "y": 760
                    },
                    {
                        "x": 2926,
                        "y": 758
                    },
                    {
                        "x": 2927,
                        "y": 798
                    },
                    {
                        "x": 2838,
                        "y": 800
                    }
                ],
                "normalizedVertices": []
            }
        },
        {
            "locations": [],
            "properties": [],
            "mid": "",
            "locale": "",
            "description": "Disc",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 2968,
                        "y": 758
                    },
                    {
                        "x": 3069,
                        "y": 756
                    },
                    {
                        "x": 3070,
                        "y": 795
                    },
                    {
                        "x": 2969,
                        "y": 797
                    }
                ],
                "normalizedVertices": []
            }
        },
        {
            "locations": [],
            "properties": [],
            "mid": "",
            "locale": "",
            "description": ".",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 3068,
                        "y": 756
                    },
                    {
                        "x": 3082,
                        "y": 756
                    },
                    {
                        "x": 3083,
                        "y": 795
                    },
                    {
                        "x": 3069,
                        "y": 795
                    }
                ],
                "normalizedVertices": []
            }
        },
        {
            "locations": [],
            "properties": [],
            "mid": "",
            "locale": "",
            "description": "%",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 3101,
                        "y": 756
                    },
                    {
                        "x": 3144,
                        "y": 755
                    },
                    {
                        "x": 3145,
                        "y": 794
                    },
                    {
                        "x": 3102,
                        "y": 795
                    }
                ],
                "normalizedVertices": []
            }
        },
        {
            "locations": [],
            "properties": [],
            "mid": "",
            "locale": "",
            "description": "Amount",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 3292,
                        "y": 761
                    },
                    {
                        "x": 3517,
                        "y": 765
                    },
                    {
                        "x": 3516,
                        "y": 802
                    },
                    {
                        "x": 3291,
                        "y": 798
                    }
                ],
                "normalizedVertices": []
            }
        },
        {
            "locations": [],
            "properties": [],
            "mid": "",
            "locale": "",
            "description": "1",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 463,
                        "y": 889
                    },
                    {
                        "x": 491,
                        "y": 890
                    },
                    {
                        "x": 490,
                        "y": 941
                    },
                    {
                        "x": 462,
                        "y": 940
                    }
                ],
                "normalizedVertices": []
            }
        },
        {
            "locations": [],
            "properties": [],
            "mid": "",
            "locale": "",
            "description": "500",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 554,
                        "y": 890
                    },
                    {
                        "x": 670,
                        "y": 892
                    },
                    {
                        "x": 669,
                        "y": 944
                    },
                    {
                        "x": 553,
                        "y": 942
                    }
                ],
                "normalizedVertices": []
            }
        },
        {
            "locations": [],
            "properties": [],
            "mid": "",
            "locale": "",
            "description": "Ltr",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 689,
                        "y": 893
                    },
                    {
                        "x": 781,
                        "y": 895
                    },
                    {
                        "x": 780,
                        "y": 946
                    },
                    {
                        "x": 688,
                        "y": 944
                    }
                ],
                "normalizedVertices": []
            }
        },
        {
            "locations": [],
            "properties": [],
            "mid": "",
            "locale": "",
            "description": ".",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 782,
                        "y": 895
                    },
                    {
                        "x": 798,
                        "y": 895
                    },
                    {
                        "x": 797,
                        "y": 946
                    },
                    {
                        "x": 781,
                        "y": 946
                    }
                ],
                "normalizedVertices": []
            }
        },
        {
            "locations": [],
            "properties": [],
            "mid": "",
            "locale": "",
            "description": "5",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 817,
                        "y": 895
                    },
                    {
                        "x": 855,
                        "y": 896
                    },
                    {
                        "x": 854,
                        "y": 947
                    },
                    {
                        "x": 816,
                        "y": 946
                    }
                ],
                "normalizedVertices": []
            }
        },
        {
            "locations": [],
            "properties": [],
            "mid": "",
            "locale": "",
            "description": "Layer",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 873,
                        "y": 896
                    },
                    {
                        "x": 1058,
                        "y": 900
                    },
                    {
                        "x": 1057,
                        "y": 952
                    },
                    {
                        "x": 872,
                        "y": 948
                    }
                ],
                "normalizedVertices": []
            }
        },
        {
            "locations": [],
            "properties": [],
            "mid": "",
            "locale": "",
            "description": "Colour",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 1075,
                        "y": 900
                    },
                    {
                        "x": 1294,
                        "y": 904
                    },
                    {
                        "x": 1293,
                        "y": 955
                    },
                    {
                        "x": 1074,
                        "y": 951
                    }
                ],
                "normalizedVertices": []
            }
        },
        {
            "locations": [],
            "properties": [],
            "mid": "",
            "locale": "",
            "description": "Tank",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 1310,
                        "y": 904
                    },
                    {
                        "x": 1471,
                        "y": 907
                    },
                    {
                        "x": 1470,
                        "y": 959
                    },
                    {
                        "x": 1309,
                        "y": 956
                    }
                ],
                "normalizedVertices": []
            }
        },
        {
            "locations": [],
            "properties": [],
            "mid": "",
            "locale": "",
            "description": "(",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 1488,
                        "y": 908
                    },
                    {
                        "x": 1512,
                        "y": 908
                    },
                    {
                        "x": 1511,
                        "y": 959
                    },
                    {
                        "x": 1487,
                        "y": 959
                    }
                ],
                "normalizedVertices": []
            }
        },
        {
            "locations": [],
            "properties": [],
            "mid": "",
            "locale": "",
            "description": "J",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 1512,
                        "y": 909
                    },
                    {
                        "x": 1551,
                        "y": 910
                    },
                    {
                        "x": 1550,
                        "y": 961
                    },
                    {
                        "x": 1511,
                        "y": 960
                    }
                ],
                "normalizedVertices": []
            }
        },
        {
            "locations": [],
            "properties": [],
            "mid": "",
            "locale": "",
            "description": ")",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 1546,
                        "y": 910
                    },
                    {
                        "x": 1569,
                        "y": 910
                    },
                    {
                        "x": 1568,
                        "y": 961
                    },
                    {
                        "x": 1545,
                        "y": 961
                    }
                ],
                "normalizedVertices": []
            }
        },
        {
            "locations": [],
            "properties": [],
            "mid": "",
            "locale": "",
            "description": "2",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 483,
                        "y": 1022
                    },
                    {
                        "x": 520,
                        "y": 1023
                    },
                    {
                        "x": 519,
                        "y": 1076
                    },
                    {
                        "x": 482,
                        "y": 1075
                    }
                ],
                "normalizedVertices": []
            }
        },
        {
            "locations": [],
            "properties": [],
            "mid": "",
            "locale": "",
            "description": "500",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 577,
                        "y": 1023
                    },
                    {
                        "x": 691,
                        "y": 1025
                    },
                    {
                        "x": 690,
                        "y": 1079
                    },
                    {
                        "x": 576,
                        "y": 1077
                    }
                ],
                "normalizedVertices": []
            }
        },
        {
            "locations": [],
            "properties": [],
            "mid": "",
            "locale": "",
            "description": "Ltr",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 712,
                        "y": 1025
                    },
                    {
                        "x": 801,
                        "y": 1027
                    },
                    {
                        "x": 800,
                        "y": 1081
                    },
                    {
                        "x": 711,
                        "y": 1079
                    }
                ],
                "normalizedVertices": []
            }
        },
        {
            "locations": [],
            "properties": [],
            "mid": "",
            "locale": "",
            "description": ".",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 801,
                        "y": 1027
                    },
                    {
                        "x": 817,
                        "y": 1027
                    },
                    {
                        "x": 816,
                        "y": 1080
                    },
                    {
                        "x": 800,
                        "y": 1080
                    }
                ],
                "normalizedVertices": []
            }
        },
        {
            "locations": [],
            "properties": [],
            "mid": "",
            "locale": "",
            "description": "3",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 836,
                        "y": 1028
                    },
                    {
                        "x": 872,
                        "y": 1029
                    },
                    {
                        "x": 871,
                        "y": 1082
                    },
                    {
                        "x": 835,
                        "y": 1081
                    }
                ],
                "normalizedVertices": []
            }
        },
        {
            "locations": [],
            "properties": [],
            "mid": "",
            "locale": "",
            "description": "Layer",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 892,
                        "y": 1028
                    },
                    {
                        "x": 1073,
                        "y": 1031
                    },
                    {
                        "x": 1072,
                        "y": 1085
                    },
                    {
                        "x": 891,
                        "y": 1082
                    }
                ],
                "normalizedVertices": []
            }
        },
        {
            "locations": [],
            "properties": [],
            "mid": "",
            "locale": "",
            "description": "Colour",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 1088,
                        "y": 1032
                    },
                    {
                        "x": 1307,
                        "y": 1036
                    },
                    {
                        "x": 1306,
                        "y": 1089
                    },
                    {
                        "x": 1087,
                        "y": 1085
                    }
                ],
                "normalizedVertices": []
            }
        },
        {
            "locations": [],
            "properties": [],
            "mid": "",
            "locale": "",
            "description": "Tank",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 1322,
                        "y": 1036
                    },
                    {
                        "x": 1479,
                        "y": 1039
                    },
                    {
                        "x": 1478,
                        "y": 1093
                    },
                    {
                        "x": 1321,
                        "y": 1090
                    }
                ],
                "normalizedVertices": []
            }
        },
        {
            "locations": [],
            "properties": [],
            "mid": "",
            "locale": "",
            "description": "(",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 1497,
                        "y": 1039
                    },
                    {
                        "x": 1519,
                        "y": 1039
                    },
                    {
                        "x": 1518,
                        "y": 1092
                    },
                    {
                        "x": 1496,
                        "y": 1092
                    }
                ],
                "normalizedVertices": []
            }
        },
        {
            "locations": [],
            "properties": [],
            "mid": "",
            "locale": "",
            "description": "J",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 1518,
                        "y": 1040
                    },
                    {
                        "x": 1555,
                        "y": 1041
                    },
                    {
                        "x": 1554,
                        "y": 1094
                    },
                    {
                        "x": 1517,
                        "y": 1093
                    }
                ],
                "normalizedVertices": []
            }
        },
        {
            "locations": [],
            "properties": [],
            "mid": "",
            "locale": "",
            "description": ")",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 1552,
                        "y": 1040
                    },
                    {
                        "x": 1576,
                        "y": 1040
                    },
                    {
                        "x": 1575,
                        "y": 1093
                    },
                    {
                        "x": 1551,
                        "y": 1093
                    }
                ],
                "normalizedVertices": []
            }
        },
        {
            "locations": [],
            "properties": [],
            "mid": "",
            "locale": "",
            "description": "3",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 487,
                        "y": 1160
                    },
                    {
                        "x": 523,
                        "y": 1160
                    },
                    {
                        "x": 522,
                        "y": 1210
                    },
                    {
                        "x": 486,
                        "y": 1210
                    }
                ],
                "normalizedVertices": []
            }
        },
        {
            "locations": [],
            "properties": [],
            "mid": "",
            "locale": "",
            "description": "500",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 580,
                        "y": 1161
                    },
                    {
                        "x": 693,
                        "y": 1162
                    },
                    {
                        "x": 692,
                        "y": 1212
                    },
                    {
                        "x": 579,
                        "y": 1211
                    }
                ],
                "normalizedVertices": []
            }
        },
        {
            "locations": [],
            "properties": [],
            "mid": "",
            "locale": "",
            "description": "Ltr",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 713,
                        "y": 1162
                    },
                    {
                        "x": 802,
                        "y": 1163
                    },
                    {
                        "x": 801,
                        "y": 1214
                    },
                    {
                        "x": 712,
                        "y": 1213
                    }
                ],
                "normalizedVertices": []
            }
        },
        {
            "locations": [],
            "properties": [],
            "mid": "",
            "locale": "",
            "description": ".",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 801,
                        "y": 1163
                    },
                    {
                        "x": 817,
                        "y": 1163
                    },
                    {
                        "x": 816,
                        "y": 1213
                    },
                    {
                        "x": 800,
                        "y": 1213
                    }
                ],
                "normalizedVertices": []
            }
        },
        {
            "locations": [],
            "properties": [],
            "mid": "",
            "locale": "",
            "description": "2",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 838,
                        "y": 1164
                    },
                    {
                        "x": 874,
                        "y": 1164
                    },
                    {
                        "x": 873,
                        "y": 1214
                    },
                    {
                        "x": 837,
                        "y": 1214
                    }
                ],
                "normalizedVertices": []
            }
        },
        {
            "locations": [],
            "properties": [],
            "mid": "",
            "locale": "",
            "description": "Layer",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 895,
                        "y": 1164
                    },
                    {
                        "x": 1074,
                        "y": 1166
                    },
                    {
                        "x": 1073,
                        "y": 1217
                    },
                    {
                        "x": 894,
                        "y": 1215
                    }
                ],
                "normalizedVertices": []
            }
        },
        {
            "locations": [],
            "properties": [],
            "mid": "",
            "locale": "",
            "description": "Colour",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 1091,
                        "y": 1166
                    },
                    {
                        "x": 1305,
                        "y": 1169
                    },
                    {
                        "x": 1304,
                        "y": 1220
                    },
                    {
                        "x": 1090,
                        "y": 1217
                    }
                ],
                "normalizedVertices": []
            }
        },
        {
            "locations": [],
            "properties": [],
            "mid": "",
            "locale": "",
            "description": "Tank",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 1323,
                        "y": 1170
                    },
                    {
                        "x": 1479,
                        "y": 1172
                    },
                    {
                        "x": 1478,
                        "y": 1222
                    },
                    {
                        "x": 1322,
                        "y": 1220
                    }
                ],
                "normalizedVertices": []
            }
        },
        {
            "locations": [],
            "properties": [],
            "mid": "",
            "locale": "",
            "description": "(",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 1496,
                        "y": 1172
                    },
                    {
                        "x": 1519,
                        "y": 1172
                    },
                    {
                        "x": 1518,
                        "y": 1222
                    },
                    {
                        "x": 1495,
                        "y": 1222
                    }
                ],
                "normalizedVertices": []
            }
        },
        {
            "locations": [],
            "properties": [],
            "mid": "",
            "locale": "",
            "description": "J",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 1518,
                        "y": 1172
                    },
                    {
                        "x": 1555,
                        "y": 1172
                    },
                    {
                        "x": 1554,
                        "y": 1222
                    },
                    {
                        "x": 1517,
                        "y": 1222
                    }
                ],
                "normalizedVertices": []
            }
        },
        {
            "locations": [],
            "properties": [],
            "mid": "",
            "locale": "",
            "description": ")",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 1554,
                        "y": 1172
                    },
                    {
                        "x": 1575,
                        "y": 1172
                    },
                    {
                        "x": 1574,
                        "y": 1222
                    },
                    {
                        "x": 1553,
                        "y": 1222
                    }
                ],
                "normalizedVertices": []
            }
        },
        {
            "locations": [],
            "properties": [],
            "mid": "",
            "locale": "",
            "description": "4",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 459,
                        "y": 1287
                    },
                    {
                        "x": 497,
                        "y": 1287
                    },
                    {
                        "x": 497,
                        "y": 1335
                    },
                    {
                        "x": 459,
                        "y": 1335
                    }
                ],
                "normalizedVertices": []
            }
        },
        {
            "locations": [],
            "properties": [],
            "mid": "",
            "locale": "",
            "description": "750",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 557,
                        "y": 1287
                    },
                    {
                        "x": 674,
                        "y": 1288
                    },
                    {
                        "x": 674,
                        "y": 1337
                    },
                    {
                        "x": 557,
                        "y": 1336
                    }
                ],
                "normalizedVertices": []
            }
        },
        {
            "locations": [],
            "properties": [],
            "mid": "",
            "locale": "",
            "description": "Ltr",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 692,
                        "y": 1288
                    },
                    {
                        "x": 783,
                        "y": 1289
                    },
                    {
                        "x": 783,
                        "y": 1338
                    },
                    {
                        "x": 692,
                        "y": 1337
                    }
                ],
                "normalizedVertices": []
            }
        },
        {
            "locations": [],
            "properties": [],
            "mid": "",
            "locale": "",
            "description": ".",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 780,
                        "y": 1289
                    },
                    {
                        "x": 797,
                        "y": 1289
                    },
                    {
                        "x": 797,
                        "y": 1337
                    },
                    {
                        "x": 780,
                        "y": 1337
                    }
                ],
                "normalizedVertices": []
            }
        },
        {
            "locations": [],
            "properties": [],
            "mid": "",
            "locale": "",
            "description": "3",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 820,
                        "y": 1289
                    },
                    {
                        "x": 857,
                        "y": 1289
                    },
                    {
                        "x": 857,
                        "y": 1337
                    },
                    {
                        "x": 820,
                        "y": 1337
                    }
                ],
                "normalizedVertices": []
            }
        },
        {
            "locations": [],
            "properties": [],
            "mid": "",
            "locale": "",
            "description": "Layer",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 877,
                        "y": 1290
                    },
                    {
                        "x": 1059,
                        "y": 1291
                    },
                    {
                        "x": 1059,
                        "y": 1339
                    },
                    {
                        "x": 877,
                        "y": 1338
                    }
                ],
                "normalizedVertices": []
            }
        },
        {
            "locations": [],
            "properties": [],
            "mid": "",
            "locale": "",
            "description": "Colour",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 1075,
                        "y": 1291
                    },
                    {
                        "x": 1294,
                        "y": 1293
                    },
                    {
                        "x": 1294,
                        "y": 1342
                    },
                    {
                        "x": 1075,
                        "y": 1340
                    }
                ],
                "normalizedVertices": []
            }
        },
        {
            "locations": [],
            "properties": [],
            "mid": "",
            "locale": "",
            "description": "Tank",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 1313,
                        "y": 1293
                    },
                    {
                        "x": 1470,
                        "y": 1294
                    },
                    {
                        "x": 1470,
                        "y": 1343
                    },
                    {
                        "x": 1313,
                        "y": 1342
                    }
                ],
                "normalizedVertices": []
            }
        },
        {
            "locations": [],
            "properties": [],
            "mid": "",
            "locale": "",
            "description": "(",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 1488,
                        "y": 1295
                    },
                    {
                        "x": 1510,
                        "y": 1295
                    },
                    {
                        "x": 1510,
                        "y": 1343
                    },
                    {
                        "x": 1488,
                        "y": 1343
                    }
                ],
                "normalizedVertices": []
            }
        },
        {
            "locations": [],
            "properties": [],
            "mid": "",
            "locale": "",
            "description": "J",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 1508,
                        "y": 1295
                    },
                    {
                        "x": 1543,
                        "y": 1295
                    },
                    {
                        "x": 1543,
                        "y": 1343
                    },
                    {
                        "x": 1508,
                        "y": 1343
                    }
                ],
                "normalizedVertices": []
            }
        },
        {
            "locations": [],
            "properties": [],
            "mid": "",
            "locale": "",
            "description": ")",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 1548,
                        "y": 1295
                    },
                    {
                        "x": 1569,
                        "y": 1295
                    },
                    {
                        "x": 1569,
                        "y": 1343
                    },
                    {
                        "x": 1548,
                        "y": 1343
                    }
                ],
                "normalizedVertices": []
            }
        },
        {
            "locations": [],
            "properties": [],
            "mid": "",
            "locale": "",
            "description": "39251000",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 1865,
                        "y": 909
                    },
                    {
                        "x": 2133,
                        "y": 914
                    },
                    {
                        "x": 2132,
                        "y": 955
                    },
                    {
                        "x": 1864,
                        "y": 950
                    }
                ],
                "normalizedVertices": []
            }
        },
        {
            "locations": [],
            "properties": [],
            "mid": "",
            "locale": "",
            "description": "500.00",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 2180,
                        "y": 915
                    },
                    {
                        "x": 2358,
                        "y": 919
                    },
                    {
                        "x": 2357,
                        "y": 960
                    },
                    {
                        "x": 2179,
                        "y": 956
                    }
                ],
                "normalizedVertices": []
            }
        },
        {
            "locations": [],
            "properties": [],
            "mid": "",
            "locale": "",
            "description": "Ltr",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 2374,
                        "y": 919
                    },
                    {
                        "x": 2457,
                        "y": 921
                    },
                    {
                        "x": 2456,
                        "y": 962
                    },
                    {
                        "x": 2373,
                        "y": 960
                    }
                ],
                "normalizedVertices": []
            }
        },
        {
            "locations": [],
            "properties": [],
            "mid": "",
            "locale": "",
            "description": "(",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 2208,
                        "y": 984
                    },
                    {
                        "x": 2231,
                        "y": 984
                    },
                    {
                        "x": 2231,
                        "y": 1026
                    },
                    {
                        "x": 2208,
                        "y": 1026
                    }
                ],
                "normalizedVertices": []
            }
        },
        {
            "locations": [],
            "properties": [],
            "mid": "",
            "locale": "",
            "description": "1.00",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 2232,
                        "y": 984
                    },
                    {
                        "x": 2349,
                        "y": 985
                    },
                    {
                        "x": 2349,
                        "y": 1027
                    },
                    {
                        "x": 2232,
                        "y": 1026
                    }
                ],
                "normalizedVertices": []
            }
        },
        {
            "locations": [],
            "properties": [],
            "mid": "",
            "locale": "",
            "description": "Ps",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 2360,
                        "y": 984
                    },
                    {
                        "x": 2435,
                        "y": 984
                    },
                    {
                        "x": 2435,
                        "y": 1027
                    },
                    {
                        "x": 2360,
                        "y": 1027
                    }
                ],
                "normalizedVertices": []
            }
        },
        {
            "locations": [],
            "properties": [],
            "mid": "",
            "locale": "",
            "description": ")",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 2426,
                        "y": 985
                    },
                    {
                        "x": 2447,
                        "y": 985
                    },
                    {
                        "x": 2447,
                        "y": 1027
                    },
                    {
                        "x": 2426,
                        "y": 1027
                    }
                ],
                "normalizedVertices": []
            }
        },
        {
            "locations": [],
            "properties": [],
            "mid": "",
            "locale": "",
            "description": "39251000",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 1863,
                        "y": 1040
                    },
                    {
                        "x": 2130,
                        "y": 1046
                    },
                    {
                        "x": 2129,
                        "y": 1091
                    },
                    {
                        "x": 1862,
                        "y": 1085
                    }
                ],
                "normalizedVertices": []
            }
        },
        {
            "locations": [],
            "properties": [],
            "mid": "",
            "locale": "",
            "description": "1,000.00",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 2173,
                        "y": 1047
                    },
                    {
                        "x": 2364,
                        "y": 1052
                    },
                    {
                        "x": 2363,
                        "y": 1097
                    },
                    {
                        "x": 2172,
                        "y": 1092
                    }
                ],
                "normalizedVertices": []
            }
        },
        {
            "locations": [],
            "properties": [],
            "mid": "",
            "locale": "",
            "description": "Ltr",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 2378,
                        "y": 1052
                    },
                    {
                        "x": 2444,
                        "y": 1054
                    },
                    {
                        "x": 2443,
                        "y": 1099
                    },
                    {
                        "x": 2377,
                        "y": 1097
                    }
                ],
                "normalizedVertices": []
            }
        },
        {
            "locations": [],
            "properties": [],
            "mid": "",
            "locale": "",
            "description": "(",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 2204,
                        "y": 1114
                    },
                    {
                        "x": 2227,
                        "y": 1114
                    },
                    {
                        "x": 2226,
                        "y": 1157
                    },
                    {
                        "x": 2203,
                        "y": 1157
                    }
                ],
                "normalizedVertices": []
            }
        },
        {
            "locations": [],
            "properties": [],
            "mid": "",
            "locale": "",
            "description": "2.00",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 2222,
                        "y": 1113
                    },
                    {
                        "x": 2339,
                        "y": 1115
                    },
                    {
                        "x": 2338,
                        "y": 1159
                    },
                    {
                        "x": 2221,
                        "y": 1157
                    }
                ],
                "normalizedVertices": []
            }
        },
        {
            "locations": [],
            "properties": [],
            "mid": "",
            "locale": "",
            "description": "Ps",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 2353,
                        "y": 1116
                    },
                    {
                        "x": 2423,
                        "y": 1117
                    },
                    {
                        "x": 2422,
                        "y": 1160
                    },
                    {
                        "x": 2352,
                        "y": 1159
                    }
                ],
                "normalizedVertices": []
            }
        },
        {
            "locations": [],
            "properties": [],
            "mid": "",
            "locale": "",
            "description": ")",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 2419,
                        "y": 1117
                    },
                    {
                        "x": 2440,
                        "y": 1117
                    },
                    {
                        "x": 2439,
                        "y": 1160
                    },
                    {
                        "x": 2418,
                        "y": 1160
                    }
                ],
                "normalizedVertices": []
            }
        },
        {
            "locations": [],
            "properties": [],
            "mid": "",
            "locale": "",
            "description": "39251000",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 1864,
                        "y": 1172
                    },
                    {
                        "x": 2128,
                        "y": 1178
                    },
                    {
                        "x": 2127,
                        "y": 1219
                    },
                    {
                        "x": 1863,
                        "y": 1213
                    }
                ],
                "normalizedVertices": []
            }
        },
        {
            "locations": [],
            "properties": [],
            "mid": "",
            "locale": "",
            "description": "1,000.00",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 2170,
                        "y": 1180
                    },
                    {
                        "x": 2362,
                        "y": 1185
                    },
                    {
                        "x": 2361,
                        "y": 1225
                    },
                    {
                        "x": 2169,
                        "y": 1220
                    }
                ],
                "normalizedVertices": []
            }
        },
        {
            "locations": [],
            "properties": [],
            "mid": "",
            "locale": "",
            "description": "Ltr",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 2373,
                        "y": 1184
                    },
                    {
                        "x": 2442,
                        "y": 1186
                    },
                    {
                        "x": 2441,
                        "y": 1227
                    },
                    {
                        "x": 2372,
                        "y": 1225
                    }
                ],
                "normalizedVertices": []
            }
        },
        {
            "locations": [],
            "properties": [],
            "mid": "",
            "locale": "",
            "description": "(",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 2205,
                        "y": 1240
                    },
                    {
                        "x": 2228,
                        "y": 1240
                    },
                    {
                        "x": 2228,
                        "y": 1279
                    },
                    {
                        "x": 2205,
                        "y": 1279
                    }
                ],
                "normalizedVertices": []
            }
        },
        {
            "locations": [],
            "properties": [],
            "mid": "",
            "locale": "",
            "description": "2.00",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 2225,
                        "y": 1239
                    },
                    {
                        "x": 2342,
                        "y": 1240
                    },
                    {
                        "x": 2342,
                        "y": 1280
                    },
                    {
                        "x": 2225,
                        "y": 1279
                    }
                ],
                "normalizedVertices": []
            }
        },
        {
            "locations": [],
            "properties": [],
            "mid": "",
            "locale": "",
            "description": "Ps",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 2357,
                        "y": 1241
                    },
                    {
                        "x": 2430,
                        "y": 1242
                    },
                    {
                        "x": 2430,
                        "y": 1282
                    },
                    {
                        "x": 2357,
                        "y": 1281
                    }
                ],
                "normalizedVertices": []
            }
        },
        {
            "locations": [],
            "properties": [],
            "mid": "",
            "locale": "",
            "description": ")",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 2424,
                        "y": 1242
                    },
                    {
                        "x": 2446,
                        "y": 1242
                    },
                    {
                        "x": 2446,
                        "y": 1281
                    },
                    {
                        "x": 2424,
                        "y": 1281
                    }
                ],
                "normalizedVertices": []
            }
        },
        {
            "locations": [],
            "properties": [],
            "mid": "",
            "locale": "",
            "description": "39251000",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 1862,
                        "y": 1292
                    },
                    {
                        "x": 2130,
                        "y": 1297
                    },
                    {
                        "x": 2129,
                        "y": 1337
                    },
                    {
                        "x": 1861,
                        "y": 1332
                    }
                ],
                "normalizedVertices": []
            }
        },
        {
            "locations": [],
            "properties": [],
            "mid": "",
            "locale": "",
            "description": "750.00",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 2175,
                        "y": 1298
                    },
                    {
                        "x": 2355,
                        "y": 1301
                    },
                    {
                        "x": 2354,
                        "y": 1340
                    },
                    {
                        "x": 2174,
                        "y": 1337
                    }
                ],
                "normalizedVertices": []
            }
        },
        {
            "locations": [],
            "properties": [],
            "mid": "",
            "locale": "",
            "description": "Ltr",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 2373,
                        "y": 1301
                    },
                    {
                        "x": 2448,
                        "y": 1302
                    },
                    {
                        "x": 2447,
                        "y": 1342
                    },
                    {
                        "x": 2372,
                        "y": 1341
                    }
                ],
                "normalizedVertices": []
            }
        },
        {
            "locations": [],
            "properties": [],
            "mid": "",
            "locale": "",
            "description": "(",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 2208,
                        "y": 1361
                    },
                    {
                        "x": 2230,
                        "y": 1361
                    },
                    {
                        "x": 2230,
                        "y": 1402
                    },
                    {
                        "x": 2208,
                        "y": 1402
                    }
                ],
                "normalizedVertices": []
            }
        },
        {
            "locations": [],
            "properties": [],
            "mid": "",
            "locale": "",
            "description": "1.00",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 2231,
                        "y": 1361
                    },
                    {
                        "x": 2347,
                        "y": 1362
                    },
                    {
                        "x": 2347,
                        "y": 1403
                    },
                    {
                        "x": 2231,
                        "y": 1402
                    }
                ],
                "normalizedVertices": []
            }
        },
        {
            "locations": [],
            "properties": [],
            "mid": "",
            "locale": "",
            "description": "Ps",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 2364,
                        "y": 1362
                    },
                    {
                        "x": 2434,
                        "y": 1363
                    },
                    {
                        "x": 2434,
                        "y": 1404
                    },
                    {
                        "x": 2364,
                        "y": 1403
                    }
                ],
                "normalizedVertices": []
            }
        },
        {
            "locations": [],
            "properties": [],
            "mid": "",
            "locale": "",
            "description": ")",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 2429,
                        "y": 1363
                    },
                    {
                        "x": 2450,
                        "y": 1363
                    },
                    {
                        "x": 2450,
                        "y": 1404
                    },
                    {
                        "x": 2429,
                        "y": 1404
                    }
                ],
                "normalizedVertices": []
            }
        },
        {
            "locations": [],
            "properties": [],
            "mid": "",
            "locale": "",
            "description": "5.68",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 2651,
                        "y": 919
                    },
                    {
                        "x": 2764,
                        "y": 923
                    },
                    {
                        "x": 2763,
                        "y": 958
                    },
                    {
                        "x": 2650,
                        "y": 954
                    }
                ],
                "normalizedVertices": []
            }
        },
        {
            "locations": [],
            "properties": [],
            "mid": "",
            "locale": "",
            "description": "Ltr",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 2838,
                        "y": 924
                    },
                    {
                        "x": 2910,
                        "y": 925
                    },
                    {
                        "x": 2910,
                        "y": 959
                    },
                    {
                        "x": 2838,
                        "y": 958
                    }
                ],
                "normalizedVertices": []
            }
        },
        {
            "locations": [],
            "properties": [],
            "mid": "",
            "locale": "",
            "description": "2,838.98",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 3314,
                        "y": 930
                    },
                    {
                        "x": 3573,
                        "y": 933
                    },
                    {
                        "x": 3573,
                        "y": 977
                    },
                    {
                        "x": 3314,
                        "y": 974
                    }
                ],
                "normalizedVertices": []
            }
        },
        {
            "locations": [],
            "properties": [],
            "mid": "",
            "locale": "",
            "description": "3.81",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 2634,
                        "y": 1055
                    },
                    {
                        "x": 2744,
                        "y": 1055
                    },
                    {
                        "x": 2744,
                        "y": 1089
                    },
                    {
                        "x": 2634,
                        "y": 1089
                    }
                ],
                "normalizedVertices": []
            }
        },
        {
            "locations": [],
            "properties": [],
            "mid": "",
            "locale": "",
            "description": "Ltr",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 2819,
                        "y": 1059
                    },
                    {
                        "x": 2891,
                        "y": 1059
                    },
                    {
                        "x": 2891,
                        "y": 1091
                    },
                    {
                        "x": 2819,
                        "y": 1091
                    }
                ],
                "normalizedVertices": []
            }
        },
        {
            "locations": [],
            "properties": [],
            "mid": "",
            "locale": "",
            "description": "3,813.56",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 3287,
                        "y": 1063
                    },
                    {
                        "x": 3542,
                        "y": 1063
                    },
                    {
                        "x": 3542,
                        "y": 1104
                    },
                    {
                        "x": 3287,
                        "y": 1104
                    }
                ],
                "normalizedVertices": []
            }
        },
        {
            "locations": [],
            "properties": [],
            "mid": "",
            "locale": "",
            "description": "3.31",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 2631,
                        "y": 1186
                    },
                    {
                        "x": 2737,
                        "y": 1186
                    },
                    {
                        "x": 2737,
                        "y": 1219
                    },
                    {
                        "x": 2631,
                        "y": 1219
                    }
                ],
                "normalizedVertices": []
            }
        },
        {
            "locations": [],
            "properties": [],
            "mid": "",
            "locale": "",
            "description": "Ltr",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 2815,
                        "y": 1190
                    },
                    {
                        "x": 2883,
                        "y": 1190
                    },
                    {
                        "x": 2883,
                        "y": 1220
                    },
                    {
                        "x": 2815,
                        "y": 1220
                    }
                ],
                "normalizedVertices": []
            }
        },
        {
            "locations": [],
            "properties": [],
            "mid": "",
            "locale": "",
            "description": "3,305.08",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 3281,
                        "y": 1194
                    },
                    {
                        "x": 3528,
                        "y": 1195
                    },
                    {
                        "x": 3528,
                        "y": 1235
                    },
                    {
                        "x": 3281,
                        "y": 1234
                    }
                ],
                "normalizedVertices": []
            }
        },
        {
            "locations": [],
            "properties": [],
            "mid": "",
            "locale": "",
            "description": "3.81",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 2641,
                        "y": 1307
                    },
                    {
                        "x": 2751,
                        "y": 1307
                    },
                    {
                        "x": 2751,
                        "y": 1338
                    },
                    {
                        "x": 2641,
                        "y": 1338
                    }
                ],
                "normalizedVertices": []
            }
        },
        {
            "locations": [],
            "properties": [],
            "mid": "",
            "locale": "",
            "description": "Ltr",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 2827,
                        "y": 1309
                    },
                    {
                        "x": 2898,
                        "y": 1310
                    },
                    {
                        "x": 2898,
                        "y": 1341
                    },
                    {
                        "x": 2827,
                        "y": 1340
                    }
                ],
                "normalizedVertices": []
            }
        },
        {
            "locations": [],
            "properties": [],
            "mid": "",
            "locale": "",
            "description": "2,860.17",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 3301,
                        "y": 1318
                    },
                    {
                        "x": 3551,
                        "y": 1318
                    },
                    {
                        "x": 3551,
                        "y": 1358
                    },
                    {
                        "x": 3301,
                        "y": 1358
                    }
                ],
                "normalizedVertices": []
            }
        },
        {
            "locations": [],
            "properties": [],
            "mid": "",
            "locale": "",
            "description": "12,817.79",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 3295,
                        "y": 1469
                    },
                    {
                        "x": 3587,
                        "y": 1469
                    },
                    {
                        "x": 3587,
                        "y": 1515
                    },
                    {
                        "x": 3295,
                        "y": 1515
                    }
                ],
                "normalizedVertices": []
            }
        },
        {
            "locations": [],
            "properties": [],
            "mid": "",
            "locale": "",
            "description": "Less",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 490,
                        "y": 1679
                    },
                    {
                        "x": 613,
                        "y": 1681
                    },
                    {
                        "x": 612,
                        "y": 1719
                    },
                    {
                        "x": 489,
                        "y": 1717
                    }
                ],
                "normalizedVertices": []
            }
        },
        {
            "locations": [],
            "properties": [],
            "mid": "",
            "locale": "",
            "description": ":",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 623,
                        "y": 1681
                    },
                    {
                        "x": 643,
                        "y": 1681
                    },
                    {
                        "x": 642,
                        "y": 1718
                    },
                    {
                        "x": 622,
                        "y": 1718
                    }
                ],
                "normalizedVertices": []
            }
        },
        {
            "locations": [],
            "properties": [],
            "mid": "",
            "locale": "",
            "description": "GST",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 1136,
                        "y": 1542
                    },
                    {
                        "x": 1282,
                        "y": 1543
                    },
                    {
                        "x": 1282,
                        "y": 1586
                    },
                    {
                        "x": 1136,
                        "y": 1585
                    }
                ],
                "normalizedVertices": []
            }
        },
        {
            "locations": [],
            "properties": [],
            "mid": "",
            "locale": "",
            "description": ":",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 1295,
                        "y": 1544
                    },
                    {
                        "x": 1318,
                        "y": 1544
                    },
                    {
                        "x": 1318,
                        "y": 1586
                    },
                    {
                        "x": 1295,
                        "y": 1586
                    }
                ],
                "normalizedVertices": []
            }
        },
        {
            "locations": [],
            "properties": [],
            "mid": "",
            "locale": "",
            "description": "CGST",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 1321,
                        "y": 1544
                    },
                    {
                        "x": 1520,
                        "y": 1546
                    },
                    {
                        "x": 1520,
                        "y": 1588
                    },
                    {
                        "x": 1321,
                        "y": 1586
                    }
                ],
                "normalizedVertices": []
            }
        },
        {
            "locations": [],
            "properties": [],
            "mid": "",
            "locale": "",
            "description": "OUTPUT",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 1535,
                        "y": 1545
                    },
                    {
                        "x": 1820,
                        "y": 1547
                    },
                    {
                        "x": 1820,
                        "y": 1590
                    },
                    {
                        "x": 1535,
                        "y": 1588
                    }
                ],
                "normalizedVertices": []
            }
        },
        {
            "locations": [],
            "properties": [],
            "mid": "",
            "locale": "",
            "description": "GST",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 1133,
                        "y": 1611
                    },
                    {
                        "x": 1279,
                        "y": 1612
                    },
                    {
                        "x": 1279,
                        "y": 1656
                    },
                    {
                        "x": 1133,
                        "y": 1655
                    }
                ],
                "normalizedVertices": []
            }
        },
        {
            "locations": [],
            "properties": [],
            "mid": "",
            "locale": "",
            "description": ":",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 1276,
                        "y": 1613
                    },
                    {
                        "x": 1301,
                        "y": 1613
                    },
                    {
                        "x": 1301,
                        "y": 1656
                    },
                    {
                        "x": 1276,
                        "y": 1656
                    }
                ],
                "normalizedVertices": []
            }
        },
        {
            "locations": [],
            "properties": [],
            "mid": "",
            "locale": "",
            "description": "SGST",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 1322,
                        "y": 1613
                    },
                    {
                        "x": 1516,
                        "y": 1615
                    },
                    {
                        "x": 1516,
                        "y": 1658
                    },
                    {
                        "x": 1322,
                        "y": 1656
                    }
                ],
                "normalizedVertices": []
            }
        },
        {
            "locations": [],
            "properties": [],
            "mid": "",
            "locale": "",
            "description": "OUTPUT",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 1534,
                        "y": 1614
                    },
                    {
                        "x": 1819,
                        "y": 1616
                    },
                    {
                        "x": 1819,
                        "y": 1660
                    },
                    {
                        "x": 1534,
                        "y": 1658
                    }
                ],
                "normalizedVertices": []
            }
        },
        {
            "locations": [],
            "properties": [],
            "mid": "",
            "locale": "",
            "description": "Rounded",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 1242,
                        "y": 1679
                    },
                    {
                        "x": 1545,
                        "y": 1684
                    },
                    {
                        "x": 1544,
                        "y": 1735
                    },
                    {
                        "x": 1241,
                        "y": 1730
                    }
                ],
                "normalizedVertices": []
            }
        },
        {
            "locations": [],
            "properties": [],
            "mid": "",
            "locale": "",
            "description": "Off",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 1570,
                        "y": 1685
                    },
                    {
                        "x": 1676,
                        "y": 1687
                    },
                    {
                        "x": 1675,
                        "y": 1737
                    },
                    {
                        "x": 1569,
                        "y": 1735
                    }
                ],
                "normalizedVertices": []
            }
        },
        {
            "locations": [],
            "properties": [],
            "mid": "",
            "locale": "",
            "description": "(",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 1686,
                        "y": 1687
                    },
                    {
                        "x": 1713,
                        "y": 1687
                    },
                    {
                        "x": 1712,
                        "y": 1737
                    },
                    {
                        "x": 1685,
                        "y": 1737
                    }
                ],
                "normalizedVertices": []
            }
        },
        {
            "locations": [],
            "properties": [],
            "mid": "",
            "locale": "",
            "description": "+/-",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 1710,
                        "y": 1687
                    },
                    {
                        "x": 1795,
                        "y": 1688
                    },
                    {
                        "x": 1794,
                        "y": 1738
                    },
                    {
                        "x": 1709,
                        "y": 1737
                    }
                ],
                "normalizedVertices": []
            }
        },
        {
            "locations": [],
            "properties": [],
            "mid": "",
            "locale": "",
            "description": ")",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 1785,
                        "y": 1688
                    },
                    {
                        "x": 1812,
                        "y": 1688
                    },
                    {
                        "x": 1811,
                        "y": 1738
                    },
                    {
                        "x": 1784,
                        "y": 1738
                    }
                ],
                "normalizedVertices": []
            }
        },
        {
            "locations": [],
            "properties": [],
            "mid": "",
            "locale": "",
            "description": "1,153.61",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 3344,
                        "y": 1568
                    },
                    {
                        "x": 3596,
                        "y": 1568
                    },
                    {
                        "x": 3596,
                        "y": 1612
                    },
                    {
                        "x": 3344,
                        "y": 1612
                    }
                ],
                "normalizedVertices": []
            }
        },
        {
            "locations": [],
            "properties": [],
            "mid": "",
            "locale": "",
            "description": "1,153.61",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 3354,
                        "y": 1636
                    },
                    {
                        "x": 3606,
                        "y": 1636
                    },
                    {
                        "x": 3606,
                        "y": 1682
                    },
                    {
                        "x": 3354,
                        "y": 1682
                    }
                ],
                "normalizedVertices": []
            }
        },
        {
            "locations": [],
            "properties": [],
            "mid": "",
            "locale": "",
            "description": "(",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 3425,
                        "y": 1706
                    },
                    {
                        "x": 3452,
                        "y": 1706
                    },
                    {
                        "x": 3452,
                        "y": 1758
                    },
                    {
                        "x": 3425,
                        "y": 1758
                    }
                ],
                "normalizedVertices": []
            }
        },
        {
            "locations": [],
            "properties": [],
            "mid": "",
            "locale": "",
            "description": "-",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 3447,
                        "y": 1706
                    },
                    {
                        "x": 3472,
                        "y": 1706
                    },
                    {
                        "x": 3472,
                        "y": 1758
                    },
                    {
                        "x": 3447,
                        "y": 1758
                    }
                ],
                "normalizedVertices": []
            }
        },
        {
            "locations": [],
            "properties": [],
            "mid": "",
            "locale": "",
            "description": ")",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 3469,
                        "y": 1706
                    },
                    {
                        "x": 3494,
                        "y": 1706
                    },
                    {
                        "x": 3494,
                        "y": 1758
                    },
                    {
                        "x": 3469,
                        "y": 1758
                    }
                ],
                "normalizedVertices": []
            }
        },
        {
            "locations": [],
            "properties": [],
            "mid": "",
            "locale": "",
            "description": "0.01",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 3492,
                        "y": 1706
                    },
                    {
                        "x": 3618,
                        "y": 1707
                    },
                    {
                        "x": 3618,
                        "y": 1759
                    },
                    {
                        "x": 3492,
                        "y": 1758
                    }
                ],
                "normalizedVertices": []
            }
        },
        {
            "locations": [],
            "properties": [],
            "mid": "",
            "locale": "",
            "description": "Total",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 1650,
                        "y": 2704
                    },
                    {
                        "x": 1798,
                        "y": 2703
                    },
                    {
                        "x": 1798,
                        "y": 2744
                    },
                    {
                        "x": 1650,
                        "y": 2745
                    }
                ],
                "normalizedVertices": []
            }
        },
        {
            "locations": [],
            "properties": [],
            "mid": "",
            "locale": "",
            "description": "3,250.00",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 2189,
                        "y": 2707
                    },
                    {
                        "x": 2407,
                        "y": 2704
                    },
                    {
                        "x": 2408,
                        "y": 2755
                    },
                    {
                        "x": 2190,
                        "y": 2758
                    }
                ],
                "normalizedVertices": []
            }
        },
        {
            "locations": [],
            "properties": [],
            "mid": "",
            "locale": "",
            "description": "Ltr",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 2422,
                        "y": 2704
                    },
                    {
                        "x": 2498,
                        "y": 2703
                    },
                    {
                        "x": 2499,
                        "y": 2754
                    },
                    {
                        "x": 2423,
                        "y": 2755
                    }
                ],
                "normalizedVertices": []
            }
        },
        {
            "locations": [],
            "properties": [],
            "mid": "",
            "locale": "",
            "description": "Amount",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 235,
                        "y": 2787
                    },
                    {
                        "x": 452,
                        "y": 2790
                    },
                    {
                        "x": 451,
                        "y": 2844
                    },
                    {
                        "x": 234,
                        "y": 2841
                    }
                ],
                "normalizedVertices": []
            }
        },
        {
            "locations": [],
            "properties": [],
            "mid": "",
            "locale": "",
            "description": "Chargeable",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 468,
                        "y": 2791
                    },
                    {
                        "x": 784,
                        "y": 2796
                    },
                    {
                        "x": 783,
                        "y": 2849
                    },
                    {
                        "x": 467,
                        "y": 2844
                    }
                ],
                "normalizedVertices": []
            }
        },
        {
            "locations": [],
            "properties": [],
            "mid": "",
            "locale": "",
            "description": "(",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 797,
                        "y": 2796
                    },
                    {
                        "x": 820,
                        "y": 2796
                    },
                    {
                        "x": 819,
                        "y": 2849
                    },
                    {
                        "x": 796,
                        "y": 2849
                    }
                ],
                "normalizedVertices": []
            }
        },
        {
            "locations": [],
            "properties": [],
            "mid": "",
            "locale": "",
            "description": "in",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 817,
                        "y": 2797
                    },
                    {
                        "x": 865,
                        "y": 2798
                    },
                    {
                        "x": 864,
                        "y": 2851
                    },
                    {
                        "x": 816,
                        "y": 2850
                    }
                ],
                "normalizedVertices": []
            }
        },
        {
            "locations": [],
            "properties": [],
            "mid": "",
            "locale": "",
            "description": "words",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 879,
                        "y": 2797
                    },
                    {
                        "x": 1042,
                        "y": 2800
                    },
                    {
                        "x": 1041,
                        "y": 2854
                    },
                    {
                        "x": 878,
                        "y": 2851
                    }
                ],
                "normalizedVertices": []
            }
        },
        {
            "locations": [],
            "properties": [],
            "mid": "",
            "locale": "",
            "description": ")",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 1038,
                        "y": 2800
                    },
                    {
                        "x": 1060,
                        "y": 2800
                    },
                    {
                        "x": 1059,
                        "y": 2853
                    },
                    {
                        "x": 1037,
                        "y": 2853
                    }
                ],
                "normalizedVertices": []
            }
        },
        {
            "locations": [],
            "properties": [],
            "mid": "",
            "locale": "",
            "description": "INR",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 203,
                        "y": 2872
                    },
                    {
                        "x": 342,
                        "y": 2873
                    },
                    {
                        "x": 342,
                        "y": 2936
                    },
                    {
                        "x": 203,
                        "y": 2935
                    }
                ],
                "normalizedVertices": []
            }
        },
        {
            "locations": [],
            "properties": [],
            "mid": "",
            "locale": "",
            "description": "Fifteen",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 367,
                        "y": 2873
                    },
                    {
                        "x": 626,
                        "y": 2875
                    },
                    {
                        "x": 626,
                        "y": 2938
                    },
                    {
                        "x": 367,
                        "y": 2936
                    }
                ],
                "normalizedVertices": []
            }
        },
        {
            "locations": [],
            "properties": [],
            "mid": "",
            "locale": "",
            "description": "Thousand",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 653,
                        "y": 2875
                    },
                    {
                        "x": 1032,
                        "y": 2877
                    },
                    {
                        "x": 1032,
                        "y": 2940
                    },
                    {
                        "x": 653,
                        "y": 2938
                    }
                ],
                "normalizedVertices": []
            }
        },
        {
            "locations": [],
            "properties": [],
            "mid": "",
            "locale": "",
            "description": "One",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 1059,
                        "y": 2878
                    },
                    {
                        "x": 1212,
                        "y": 2879
                    },
                    {
                        "x": 1212,
                        "y": 2942
                    },
                    {
                        "x": 1059,
                        "y": 2941
                    }
                ],
                "normalizedVertices": []
            }
        },
        {
            "locations": [],
            "properties": [],
            "mid": "",
            "locale": "",
            "description": "Hundred",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 1233,
                        "y": 2879
                    },
                    {
                        "x": 1557,
                        "y": 2881
                    },
                    {
                        "x": 1557,
                        "y": 2944
                    },
                    {
                        "x": 1233,
                        "y": 2942
                    }
                ],
                "normalizedVertices": []
            }
        },
        {
            "locations": [],
            "properties": [],
            "mid": "",
            "locale": "",
            "description": "Twenty",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 1584,
                        "y": 2881
                    },
                    {
                        "x": 1853,
                        "y": 2883
                    },
                    {
                        "x": 1853,
                        "y": 2946
                    },
                    {
                        "x": 1584,
                        "y": 2944
                    }
                ],
                "normalizedVertices": []
            }
        },
        {
            "locations": [],
            "properties": [],
            "mid": "",
            "locale": "",
            "description": "Five",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 1875,
                        "y": 2883
                    },
                    {
                        "x": 2032,
                        "y": 2884
                    },
                    {
                        "x": 2032,
                        "y": 2947
                    },
                    {
                        "x": 1875,
                        "y": 2946
                    }
                ],
                "normalizedVertices": []
            }
        },
        {
            "locations": [],
            "properties": [],
            "mid": "",
            "locale": "",
            "description": "Only",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 2049,
                        "y": 2884
                    },
                    {
                        "x": 2221,
                        "y": 2885
                    },
                    {
                        "x": 2221,
                        "y": 2948
                    },
                    {
                        "x": 2049,
                        "y": 2947
                    }
                ],
                "normalizedVertices": []
            }
        },
        {
            "locations": [],
            "properties": [],
            "mid": "",
            "locale": "",
            "description": "HSN",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 779,
                        "y": 2980
                    },
                    {
                        "x": 909,
                        "y": 2982
                    },
                    {
                        "x": 908,
                        "y": 3028
                    },
                    {
                        "x": 778,
                        "y": 3026
                    }
                ],
                "normalizedVertices": []
            }
        },
        {
            "locations": [],
            "properties": [],
            "mid": "",
            "locale": "",
            "description": "/",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 907,
                        "y": 2982
                    },
                    {
                        "x": 935,
                        "y": 2982
                    },
                    {
                        "x": 934,
                        "y": 3027
                    },
                    {
                        "x": 906,
                        "y": 3027
                    }
                ],
                "normalizedVertices": []
            }
        },
        {
            "locations": [],
            "properties": [],
            "mid": "",
            "locale": "",
            "description": "SAC",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 931,
                        "y": 2982
                    },
                    {
                        "x": 1054,
                        "y": 2984
                    },
                    {
                        "x": 1053,
                        "y": 3030
                    },
                    {
                        "x": 930,
                        "y": 3028
                    }
                ],
                "normalizedVertices": []
            }
        },
        {
            "locations": [],
            "properties": [],
            "mid": "",
            "locale": "",
            "description": "Taxable",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 1811,
                        "y": 2986
                    },
                    {
                        "x": 2056,
                        "y": 2986
                    },
                    {
                        "x": 2056,
                        "y": 3031
                    },
                    {
                        "x": 1811,
                        "y": 3031
                    }
                ],
                "normalizedVertices": []
            }
        },
        {
            "locations": [],
            "properties": [],
            "mid": "",
            "locale": "",
            "description": "15,125.00",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 3350,
                        "y": 2714
                    },
                    {
                        "x": 3721,
                        "y": 2714
                    },
                    {
                        "x": 3721,
                        "y": 2775
                    },
                    {
                        "x": 3350,
                        "y": 2775
                    }
                ],
                "normalizedVertices": []
            }
        },
        {
            "locations": [],
            "properties": [],
            "mid": "",
            "locale": "",
            "description": "E.",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 3497,
                        "y": 2801
                    },
                    {
                        "x": 3557,
                        "y": 2800
                    },
                    {
                        "x": 3557,
                        "y": 2839
                    },
                    {
                        "x": 3497,
                        "y": 2840
                    }
                ],
                "normalizedVertices": []
            }
        },
        {
            "locations": [],
            "properties": [],
            "mid": "",
            "locale": "",
            "description": "&",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 3576,
                        "y": 2800
                    },
                    {
                        "x": 3619,
                        "y": 2799
                    },
                    {
                        "x": 3619,
                        "y": 2838
                    },
                    {
                        "x": 3576,
                        "y": 2839
                    }
                ],
                "normalizedVertices": []
            }
        },
        {
            "locations": [],
            "properties": [],
            "mid": "",
            "locale": "",
            "description": "O.E",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 3637,
                        "y": 2799
                    },
                    {
                        "x": 3749,
                        "y": 2798
                    },
                    {
                        "x": 3749,
                        "y": 2837
                    },
                    {
                        "x": 3637,
                        "y": 2838
                    }
                ],
                "normalizedVertices": []
            }
        },
        {
            "locations": [],
            "properties": [],
            "mid": "",
            "locale": "",
            "description": "Central",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 2283,
                        "y": 2988
                    },
                    {
                        "x": 2511,
                        "y": 2988
                    },
                    {
                        "x": 2511,
                        "y": 3031
                    },
                    {
                        "x": 2283,
                        "y": 3031
                    }
                ],
                "normalizedVertices": []
            }
        },
        {
            "locations": [],
            "properties": [],
            "mid": "",
            "locale": "",
            "description": "Tax",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 2527,
                        "y": 2988
                    },
                    {
                        "x": 2641,
                        "y": 2988
                    },
                    {
                        "x": 2641,
                        "y": 3031
                    },
                    {
                        "x": 2527,
                        "y": 3031
                    }
                ],
                "normalizedVertices": []
            }
        },
        {
            "locations": [],
            "properties": [],
            "mid": "",
            "locale": "",
            "description": "State",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 2962,
                        "y": 2984
                    },
                    {
                        "x": 3125,
                        "y": 2982
                    },
                    {
                        "x": 3125,
                        "y": 3026
                    },
                    {
                        "x": 2963,
                        "y": 3028
                    }
                ],
                "normalizedVertices": []
            }
        },
        {
            "locations": [],
            "properties": [],
            "mid": "",
            "locale": "",
            "description": "Tax",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 3145,
                        "y": 2982
                    },
                    {
                        "x": 3261,
                        "y": 2981
                    },
                    {
                        "x": 3261,
                        "y": 3024
                    },
                    {
                        "x": 3145,
                        "y": 3025
                    }
                ],
                "normalizedVertices": []
            }
        },
        {
            "locations": [],
            "properties": [],
            "mid": "",
            "locale": "",
            "description": "Total",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 3561,
                        "y": 2978
                    },
                    {
                        "x": 3718,
                        "y": 2976
                    },
                    {
                        "x": 3718,
                        "y": 3016
                    },
                    {
                        "x": 3561,
                        "y": 3018
                    }
                ],
                "normalizedVertices": []
            }
        }
    ]
    
    function extractTextFromImg(img: string) {
        addMessage({image: img})
            .then((result: any) => {
                const results = result.data.res.filter(Boolean)
                const textAnnotation = results[0].responses[0].textAnnotations;
                const extractInfo = onExtractBillInfo(textAnnotation);
                console.log('the extracted information is ', extractInfo);
            }).catch(err => {
                console.log('error is ', err);
            })
    }

    function getCameraPic(img: string) {
        setIsCameraOpen(false);
        extractTextFromImg(img);
        console.log('image link is ', img)
    }

    function handleFileChange(e: ChangeEvent<HTMLInputElement>) {
        if(e.target.files && e.target.files.length) {
            setFile(e.target.files[0]);
            const ctx = canvasRef?.current?.getContext('2d');
            if (!canvasRef || !canvasRef.current) return;
            (async function() {
                if (!e.target.files) return;
                let blob = await fetch(URL.createObjectURL(e.target.files[0])).then(r => r.blob());
                let dataUrl = await new Promise(resolve => {
                  let reader = new FileReader();
                  reader.onload = () => resolve(reader.result);
                  reader.readAsDataURL(blob);
                });
                // extractTextFromImg((dataUrl as string).split('base64,')[1].trim());
                const extractInfo = onExtractBillInfo(ann);
                console.log('the extracted information is ', extractInfo);
            })();
            let base_image = new Image();
            base_image.width = pageRef?.current?.getBoundingClientRect().width || 400;
            base_image.height = 400;
            base_image.src = URL.createObjectURL(e.target.files[0]);
            base_image.onload = function() {
                if (canvasRef.current) {
                    canvasRef.current.width = base_image.width
                    canvasRef.current.height = base_image.height
                    ctx?.drawImage(base_image, 0, 0, base_image.width, base_image.height);
                }
            }
        }
    }

    return (
        <div ref={pageRef} className="flex flex-col max-w-2xl overflow-hidden h-[100vh] m-auto">
            {
                isCameraOpen ? <Camera onSave={getCameraPic}/> :
                <>
                    <header className="bg-slate-300 p-4 mb-4">
                        <h1 className="font-semibold">Bill Scanner</h1>
                    </header>
                    <main className="flex flex-col items-center">
                        <div className="w-fit">
                            <PrimaryButton onClick={onSelectInput}>Select Image</PrimaryButton>
                            <input ref={inputRef}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => handleFileChange(e)} type="file" className="hidden" />
                        </div>
                        <div>or</div>
                        <div className="w-fit">
                            <PrimaryButton onClick={() => setIsCameraOpen(true)}>Click Photo</PrimaryButton>
                        </div>
                        <canvas className="mt-4" ref={canvasRef} height={400} width={400}></canvas>
                    </main>
                </>
            }
        </div>
    )
}