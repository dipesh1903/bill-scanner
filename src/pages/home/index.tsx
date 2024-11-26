import { ChangeEvent, useRef, useState } from "react";
import { PrimaryButton } from "../../components/ui/button";
import Camera from "../../components/camera";
import { getFunctions, httpsCallable } from "firebase/functions";
import { onExtractBillInfo } from "../../utils/extractText";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
    const [file, setFile] = useState<File>();
    const inputRef= useRef<HTMLInputElement>(null);
    const navigate = useNavigate();
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

    const ann = [
        {
            "locations": [],
            "properties": [],
            "mid": "",
            "locale": "en",
            "description": "CIN: U70200WB2012PTC17519\nBuyer (Bill to)\nSRI GANESH HARDWRAE STORES\nRAJGANJ BAZAR\n90643-29828\nGSTIN/UIN\n: 19ACIPA3166D1ZX\nState Name : West Bengal, Code: 19\nDispatch Doc No.\nDispatched through\nBill of Lading/LR-RR No.\nTerms of Delivery\nDelivery Note Date\nDestination\nRAJGANJ\nMotor Vehicle No.\nWB73H0626\nSI\nNo.\nDescription of Goods\nHSN/SAC\nQuantity\nRate\nper Disc. %\nAmount\n1 750 Ltr. 3 Layer Colour Tank (J)\n39251000 1,500.00 Ltr\n(2.00 Ps)\n3.81\nLtr\n5,720.34\nGREEN\n2 500 Ltr. 3 Layer Colour Tank (J)\nGREEN\n39251000 1,000.00 Ltr\n3.81\nLtr\n3,813.56\n3\n500 Ltr. 2 Layer Colour Tank (J)\n39251000\nGREEN\n4\n1000 Ltr. 3 Layer Colour Tank (J)\n(2.00 Ps)\n1,000.00 Ltr\n(2.00 Ps)\n39251000 1,000.00 Ltr\n(1.00 Ps)\n3.31 Ltr\n3,305.08\n3.81\nLtr\n3,813.56\nGREEN\nGST:CGST OUTPUT\nGST: SGST OUTPUT\n16,652.54\n1,498.73\n1,498.73\nTotal\n4,500.00 Ltr\n19,650.00\n40\nChargeable (in words)",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 35,
                        "y": 0
                    },
                    {
                        "x": 1577,
                        "y": 0
                    },
                    {
                        "x": 1577,
                        "y": 1197
                    },
                    {
                        "x": 35,
                        "y": 1197
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
            "description": "CIN",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 321,
                        "y": 1
                    },
                    {
                        "x": 364,
                        "y": 2
                    },
                    {
                        "x": 364,
                        "y": 21
                    },
                    {
                        "x": 321,
                        "y": 20
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
                        "x": 367,
                        "y": 1
                    },
                    {
                        "x": 374,
                        "y": 1
                    },
                    {
                        "x": 374,
                        "y": 20
                    },
                    {
                        "x": 367,
                        "y": 20
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
            "description": "U70200WB2012PTC17519",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 383,
                        "y": 1
                    },
                    {
                        "x": 713,
                        "y": 7
                    },
                    {
                        "x": 713,
                        "y": 27
                    },
                    {
                        "x": 383,
                        "y": 21
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
            "description": "Buyer",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 137,
                        "y": 31
                    },
                    {
                        "x": 200,
                        "y": 31
                    },
                    {
                        "x": 200,
                        "y": 49
                    },
                    {
                        "x": 137,
                        "y": 49
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
                        "x": 207,
                        "y": 31
                    },
                    {
                        "x": 215,
                        "y": 31
                    },
                    {
                        "x": 215,
                        "y": 49
                    },
                    {
                        "x": 207,
                        "y": 49
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
                        "x": 215,
                        "y": 31
                    },
                    {
                        "x": 247,
                        "y": 31
                    },
                    {
                        "x": 247,
                        "y": 49
                    },
                    {
                        "x": 215,
                        "y": 49
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
            "description": "to",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 253,
                        "y": 31
                    },
                    {
                        "x": 274,
                        "y": 31
                    },
                    {
                        "x": 274,
                        "y": 49
                    },
                    {
                        "x": 253,
                        "y": 49
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
                        "x": 272,
                        "y": 31
                    },
                    {
                        "x": 282,
                        "y": 31
                    },
                    {
                        "x": 282,
                        "y": 49
                    },
                    {
                        "x": 272,
                        "y": 49
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
            "description": "SRI",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 133,
                        "y": 57
                    },
                    {
                        "x": 178,
                        "y": 57
                    },
                    {
                        "x": 178,
                        "y": 77
                    },
                    {
                        "x": 133,
                        "y": 77
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
            "description": "GANESH",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 186,
                        "y": 57
                    },
                    {
                        "x": 298,
                        "y": 57
                    },
                    {
                        "x": 298,
                        "y": 77
                    },
                    {
                        "x": 186,
                        "y": 77
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
            "description": "HARDWRAE",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 308,
                        "y": 57
                    },
                    {
                        "x": 465,
                        "y": 58
                    },
                    {
                        "x": 465,
                        "y": 79
                    },
                    {
                        "x": 308,
                        "y": 78
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
            "description": "STORES",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 474,
                        "y": 58
                    },
                    {
                        "x": 584,
                        "y": 58
                    },
                    {
                        "x": 584,
                        "y": 78
                    },
                    {
                        "x": 474,
                        "y": 78
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
                        "x": 132,
                        "y": 85
                    },
                    {
                        "x": 251,
                        "y": 84
                    },
                    {
                        "x": 251,
                        "y": 101
                    },
                    {
                        "x": 132,
                        "y": 102
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
            "description": "BAZAR",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 260,
                        "y": 84
                    },
                    {
                        "x": 346,
                        "y": 84
                    },
                    {
                        "x": 346,
                        "y": 101
                    },
                    {
                        "x": 260,
                        "y": 101
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
                        "x": 129,
                        "y": 111
                    },
                    {
                        "x": 287,
                        "y": 111
                    },
                    {
                        "x": 287,
                        "y": 127
                    },
                    {
                        "x": 129,
                        "y": 127
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
                        "x": 127,
                        "y": 135
                    },
                    {
                        "x": 207,
                        "y": 135
                    },
                    {
                        "x": 207,
                        "y": 152
                    },
                    {
                        "x": 127,
                        "y": 152
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
                        "x": 207,
                        "y": 135
                    },
                    {
                        "x": 217,
                        "y": 135
                    },
                    {
                        "x": 217,
                        "y": 151
                    },
                    {
                        "x": 207,
                        "y": 151
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
                        "x": 217,
                        "y": 135
                    },
                    {
                        "x": 259,
                        "y": 135
                    },
                    {
                        "x": 259,
                        "y": 151
                    },
                    {
                        "x": 217,
                        "y": 151
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
                        "x": 327,
                        "y": 135
                    },
                    {
                        "x": 334,
                        "y": 135
                    },
                    {
                        "x": 334,
                        "y": 152
                    },
                    {
                        "x": 327,
                        "y": 152
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
                        "x": 349,
                        "y": 134
                    },
                    {
                        "x": 592,
                        "y": 137
                    },
                    {
                        "x": 592,
                        "y": 155
                    },
                    {
                        "x": 349,
                        "y": 152
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
                        "x": 123,
                        "y": 160
                    },
                    {
                        "x": 185,
                        "y": 160
                    },
                    {
                        "x": 185,
                        "y": 177
                    },
                    {
                        "x": 123,
                        "y": 177
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
                        "x": 194,
                        "y": 160
                    },
                    {
                        "x": 264,
                        "y": 160
                    },
                    {
                        "x": 264,
                        "y": 176
                    },
                    {
                        "x": 194,
                        "y": 176
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
                        "x": 324,
                        "y": 159
                    },
                    {
                        "x": 334,
                        "y": 159
                    },
                    {
                        "x": 334,
                        "y": 179
                    },
                    {
                        "x": 324,
                        "y": 179
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
                        "x": 344,
                        "y": 158
                    },
                    {
                        "x": 410,
                        "y": 159
                    },
                    {
                        "x": 410,
                        "y": 180
                    },
                    {
                        "x": 344,
                        "y": 179
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
                        "x": 418,
                        "y": 160
                    },
                    {
                        "x": 505,
                        "y": 162
                    },
                    {
                        "x": 505,
                        "y": 183
                    },
                    {
                        "x": 418,
                        "y": 181
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
                        "x": 505,
                        "y": 162
                    },
                    {
                        "x": 511,
                        "y": 162
                    },
                    {
                        "x": 511,
                        "y": 182
                    },
                    {
                        "x": 505,
                        "y": 182
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
                        "x": 520,
                        "y": 162
                    },
                    {
                        "x": 586,
                        "y": 163
                    },
                    {
                        "x": 586,
                        "y": 184
                    },
                    {
                        "x": 520,
                        "y": 183
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
                        "x": 595,
                        "y": 164
                    },
                    {
                        "x": 602,
                        "y": 164
                    },
                    {
                        "x": 602,
                        "y": 184
                    },
                    {
                        "x": 595,
                        "y": 184
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
                        "x": 611,
                        "y": 164
                    },
                    {
                        "x": 639,
                        "y": 165
                    },
                    {
                        "x": 639,
                        "y": 185
                    },
                    {
                        "x": 611,
                        "y": 184
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
            "description": "Dispatch",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 778,
                        "y": 25
                    },
                    {
                        "x": 872,
                        "y": 27
                    },
                    {
                        "x": 872,
                        "y": 46
                    },
                    {
                        "x": 778,
                        "y": 44
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
            "description": "Doc",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 880,
                        "y": 27
                    },
                    {
                        "x": 924,
                        "y": 28
                    },
                    {
                        "x": 924,
                        "y": 47
                    },
                    {
                        "x": 880,
                        "y": 46
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
                        "x": 930,
                        "y": 28
                    },
                    {
                        "x": 967,
                        "y": 29
                    },
                    {
                        "x": 967,
                        "y": 48
                    },
                    {
                        "x": 930,
                        "y": 47
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
            "description": "Dispatched",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 778,
                        "y": 80
                    },
                    {
                        "x": 898,
                        "y": 83
                    },
                    {
                        "x": 897,
                        "y": 103
                    },
                    {
                        "x": 777,
                        "y": 100
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
            "description": "through",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 907,
                        "y": 84
                    },
                    {
                        "x": 991,
                        "y": 86
                    },
                    {
                        "x": 990,
                        "y": 105
                    },
                    {
                        "x": 906,
                        "y": 103
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
                        "x": 779,
                        "y": 136
                    },
                    {
                        "x": 811,
                        "y": 137
                    },
                    {
                        "x": 810,
                        "y": 157
                    },
                    {
                        "x": 779,
                        "y": 156
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
                        "x": 818,
                        "y": 137
                    },
                    {
                        "x": 840,
                        "y": 138
                    },
                    {
                        "x": 840,
                        "y": 158
                    },
                    {
                        "x": 818,
                        "y": 157
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
                        "x": 846,
                        "y": 138
                    },
                    {
                        "x": 918,
                        "y": 140
                    },
                    {
                        "x": 917,
                        "y": 160
                    },
                    {
                        "x": 846,
                        "y": 158
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
                        "x": 919,
                        "y": 140
                    },
                    {
                        "x": 928,
                        "y": 140
                    },
                    {
                        "x": 928,
                        "y": 159
                    },
                    {
                        "x": 919,
                        "y": 159
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
                        "x": 928,
                        "y": 140
                    },
                    {
                        "x": 957,
                        "y": 141
                    },
                    {
                        "x": 957,
                        "y": 160
                    },
                    {
                        "x": 928,
                        "y": 159
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
                        "x": 957,
                        "y": 141
                    },
                    {
                        "x": 967,
                        "y": 141
                    },
                    {
                        "x": 967,
                        "y": 160
                    },
                    {
                        "x": 957,
                        "y": 160
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
                        "x": 967,
                        "y": 141
                    },
                    {
                        "x": 1001,
                        "y": 142
                    },
                    {
                        "x": 1000,
                        "y": 162
                    },
                    {
                        "x": 967,
                        "y": 161
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
                        "x": 1008,
                        "y": 142
                    },
                    {
                        "x": 1047,
                        "y": 143
                    },
                    {
                        "x": 1046,
                        "y": 163
                    },
                    {
                        "x": 1008,
                        "y": 162
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
                        "x": 777,
                        "y": 197
                    },
                    {
                        "x": 845,
                        "y": 199
                    },
                    {
                        "x": 844,
                        "y": 218
                    },
                    {
                        "x": 776,
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
            "description": "of",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 854,
                        "y": 200
                    },
                    {
                        "x": 875,
                        "y": 201
                    },
                    {
                        "x": 874,
                        "y": 219
                    },
                    {
                        "x": 853,
                        "y": 218
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
                        "x": 881,
                        "y": 200
                    },
                    {
                        "x": 971,
                        "y": 203
                    },
                    {
                        "x": 970,
                        "y": 222
                    },
                    {
                        "x": 880,
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
            "description": "Delivery",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 1084,
                        "y": 36
                    },
                    {
                        "x": 1169,
                        "y": 39
                    },
                    {
                        "x": 1168,
                        "y": 58
                    },
                    {
                        "x": 1083,
                        "y": 55
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
            "description": "Note",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 1176,
                        "y": 40
                    },
                    {
                        "x": 1225,
                        "y": 42
                    },
                    {
                        "x": 1224,
                        "y": 60
                    },
                    {
                        "x": 1175,
                        "y": 58
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
            "description": "Date",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 1231,
                        "y": 42
                    },
                    {
                        "x": 1281,
                        "y": 44
                    },
                    {
                        "x": 1280,
                        "y": 63
                    },
                    {
                        "x": 1230,
                        "y": 61
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
                        "x": 1086,
                        "y": 91
                    },
                    {
                        "x": 1206,
                        "y": 95
                    },
                    {
                        "x": 1205,
                        "y": 110
                    },
                    {
                        "x": 1086,
                        "y": 106
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
                        "x": 1088,
                        "y": 120
                    },
                    {
                        "x": 1212,
                        "y": 125
                    },
                    {
                        "x": 1211,
                        "y": 142
                    },
                    {
                        "x": 1087,
                        "y": 137
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
                        "x": 1088,
                        "y": 144
                    },
                    {
                        "x": 1151,
                        "y": 147
                    },
                    {
                        "x": 1150,
                        "y": 164
                    },
                    {
                        "x": 1087,
                        "y": 162
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
                        "x": 1156,
                        "y": 147
                    },
                    {
                        "x": 1235,
                        "y": 150
                    },
                    {
                        "x": 1234,
                        "y": 168
                    },
                    {
                        "x": 1155,
                        "y": 165
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
                        "x": 1242,
                        "y": 150
                    },
                    {
                        "x": 1277,
                        "y": 151
                    },
                    {
                        "x": 1276,
                        "y": 169
                    },
                    {
                        "x": 1241,
                        "y": 168
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
            "description": "WB73H0626",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 1087,
                        "y": 176
                    },
                    {
                        "x": 1244,
                        "y": 180
                    },
                    {
                        "x": 1243,
                        "y": 198
                    },
                    {
                        "x": 1087,
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
            "description": "SI",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 110,
                        "y": 344
                    },
                    {
                        "x": 137,
                        "y": 344
                    },
                    {
                        "x": 137,
                        "y": 362
                    },
                    {
                        "x": 110,
                        "y": 362
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
                        "x": 111,
                        "y": 374
                    },
                    {
                        "x": 134,
                        "y": 374
                    },
                    {
                        "x": 134,
                        "y": 391
                    },
                    {
                        "x": 111,
                        "y": 391
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
                        "x": 297,
                        "y": 347
                    },
                    {
                        "x": 406,
                        "y": 347
                    },
                    {
                        "x": 406,
                        "y": 366
                    },
                    {
                        "x": 297,
                        "y": 366
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
                        "x": 414,
                        "y": 347
                    },
                    {
                        "x": 435,
                        "y": 347
                    },
                    {
                        "x": 435,
                        "y": 366
                    },
                    {
                        "x": 414,
                        "y": 366
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
                        "x": 438,
                        "y": 347
                    },
                    {
                        "x": 503,
                        "y": 347
                    },
                    {
                        "x": 503,
                        "y": 366
                    },
                    {
                        "x": 438,
                        "y": 366
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
                        "x": 692,
                        "y": 353
                    },
                    {
                        "x": 742,
                        "y": 354
                    },
                    {
                        "x": 742,
                        "y": 371
                    },
                    {
                        "x": 692,
                        "y": 370
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
                        "x": 744,
                        "y": 354
                    },
                    {
                        "x": 753,
                        "y": 354
                    },
                    {
                        "x": 753,
                        "y": 370
                    },
                    {
                        "x": 744,
                        "y": 370
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
                        "x": 752,
                        "y": 354
                    },
                    {
                        "x": 801,
                        "y": 355
                    },
                    {
                        "x": 801,
                        "y": 372
                    },
                    {
                        "x": 752,
                        "y": 371
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
                        "x": 830,
                        "y": 356
                    },
                    {
                        "x": 923,
                        "y": 357
                    },
                    {
                        "x": 923,
                        "y": 376
                    },
                    {
                        "x": 830,
                        "y": 375
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
                        "x": 978,
                        "y": 359
                    },
                    {
                        "x": 1029,
                        "y": 360
                    },
                    {
                        "x": 1029,
                        "y": 375
                    },
                    {
                        "x": 978,
                        "y": 374
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
                        "x": 1080,
                        "y": 361
                    },
                    {
                        "x": 1115,
                        "y": 360
                    },
                    {
                        "x": 1115,
                        "y": 378
                    },
                    {
                        "x": 1081,
                        "y": 379
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
                        "x": 1131,
                        "y": 360
                    },
                    {
                        "x": 1172,
                        "y": 359
                    },
                    {
                        "x": 1172,
                        "y": 376
                    },
                    {
                        "x": 1131,
                        "y": 377
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
                        "x": 1171,
                        "y": 359
                    },
                    {
                        "x": 1177,
                        "y": 359
                    },
                    {
                        "x": 1177,
                        "y": 376
                    },
                    {
                        "x": 1171,
                        "y": 376
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
                        "x": 1182,
                        "y": 359
                    },
                    {
                        "x": 1202,
                        "y": 358
                    },
                    {
                        "x": 1202,
                        "y": 375
                    },
                    {
                        "x": 1182,
                        "y": 376
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
                        "x": 1260,
                        "y": 362
                    },
                    {
                        "x": 1347,
                        "y": 364
                    },
                    {
                        "x": 1347,
                        "y": 379
                    },
                    {
                        "x": 1260,
                        "y": 377
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
                        "x": 114,
                        "y": 415
                    },
                    {
                        "x": 126,
                        "y": 415
                    },
                    {
                        "x": 126,
                        "y": 438
                    },
                    {
                        "x": 114,
                        "y": 438
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
                        "x": 150,
                        "y": 415
                    },
                    {
                        "x": 196,
                        "y": 416
                    },
                    {
                        "x": 196,
                        "y": 440
                    },
                    {
                        "x": 150,
                        "y": 439
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
                        "x": 206,
                        "y": 416
                    },
                    {
                        "x": 243,
                        "y": 417
                    },
                    {
                        "x": 243,
                        "y": 440
                    },
                    {
                        "x": 206,
                        "y": 439
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
                        "x": 243,
                        "y": 416
                    },
                    {
                        "x": 251,
                        "y": 416
                    },
                    {
                        "x": 251,
                        "y": 439
                    },
                    {
                        "x": 243,
                        "y": 439
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
                        "x": 257,
                        "y": 417
                    },
                    {
                        "x": 271,
                        "y": 417
                    },
                    {
                        "x": 271,
                        "y": 440
                    },
                    {
                        "x": 257,
                        "y": 440
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
                        "x": 280,
                        "y": 417
                    },
                    {
                        "x": 357,
                        "y": 418
                    },
                    {
                        "x": 357,
                        "y": 441
                    },
                    {
                        "x": 280,
                        "y": 440
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
                        "x": 363,
                        "y": 418
                    },
                    {
                        "x": 455,
                        "y": 419
                    },
                    {
                        "x": 455,
                        "y": 443
                    },
                    {
                        "x": 363,
                        "y": 442
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
                        "x": 461,
                        "y": 419
                    },
                    {
                        "x": 528,
                        "y": 420
                    },
                    {
                        "x": 528,
                        "y": 444
                    },
                    {
                        "x": 461,
                        "y": 443
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
                        "x": 535,
                        "y": 421
                    },
                    {
                        "x": 545,
                        "y": 421
                    },
                    {
                        "x": 545,
                        "y": 444
                    },
                    {
                        "x": 535,
                        "y": 444
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
                        "x": 544,
                        "y": 421
                    },
                    {
                        "x": 559,
                        "y": 421
                    },
                    {
                        "x": 559,
                        "y": 444
                    },
                    {
                        "x": 544,
                        "y": 444
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
                        "x": 558,
                        "y": 421
                    },
                    {
                        "x": 569,
                        "y": 421
                    },
                    {
                        "x": 569,
                        "y": 444
                    },
                    {
                        "x": 558,
                        "y": 444
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
                        "x": 690,
                        "y": 421
                    },
                    {
                        "x": 800,
                        "y": 424
                    },
                    {
                        "x": 799,
                        "y": 446
                    },
                    {
                        "x": 689,
                        "y": 443
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
            "description": "1,500.00",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 819,
                        "y": 425
                    },
                    {
                        "x": 898,
                        "y": 427
                    },
                    {
                        "x": 897,
                        "y": 449
                    },
                    {
                        "x": 818,
                        "y": 447
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
                        "x": 904,
                        "y": 428
                    },
                    {
                        "x": 932,
                        "y": 429
                    },
                    {
                        "x": 931,
                        "y": 450
                    },
                    {
                        "x": 903,
                        "y": 449
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
                        "x": 831,
                        "y": 456
                    },
                    {
                        "x": 841,
                        "y": 456
                    },
                    {
                        "x": 841,
                        "y": 473
                    },
                    {
                        "x": 831,
                        "y": 473
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
                        "x": 838,
                        "y": 455
                    },
                    {
                        "x": 888,
                        "y": 456
                    },
                    {
                        "x": 888,
                        "y": 474
                    },
                    {
                        "x": 838,
                        "y": 473
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
                        "x": 894,
                        "y": 457
                    },
                    {
                        "x": 924,
                        "y": 458
                    },
                    {
                        "x": 924,
                        "y": 475
                    },
                    {
                        "x": 894,
                        "y": 474
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
                        "x": 921,
                        "y": 457
                    },
                    {
                        "x": 930,
                        "y": 457
                    },
                    {
                        "x": 930,
                        "y": 474
                    },
                    {
                        "x": 921,
                        "y": 474
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
                        "x": 1012,
                        "y": 429
                    },
                    {
                        "x": 1057,
                        "y": 430
                    },
                    {
                        "x": 1057,
                        "y": 445
                    },
                    {
                        "x": 1012,
                        "y": 444
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
                        "x": 1088,
                        "y": 431
                    },
                    {
                        "x": 1118,
                        "y": 431
                    },
                    {
                        "x": 1118,
                        "y": 445
                    },
                    {
                        "x": 1088,
                        "y": 445
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
            "description": "5,720.34",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 1281,
                        "y": 434
                    },
                    {
                        "x": 1385,
                        "y": 435
                    },
                    {
                        "x": 1385,
                        "y": 454
                    },
                    {
                        "x": 1281,
                        "y": 453
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
            "description": "GREEN",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 185,
                        "y": 475
                    },
                    {
                        "x": 271,
                        "y": 475
                    },
                    {
                        "x": 271,
                        "y": 491
                    },
                    {
                        "x": 185,
                        "y": 491
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
                        "x": 117,
                        "y": 501
                    },
                    {
                        "x": 133,
                        "y": 501
                    },
                    {
                        "x": 133,
                        "y": 523
                    },
                    {
                        "x": 117,
                        "y": 523
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
                        "x": 156,
                        "y": 501
                    },
                    {
                        "x": 201,
                        "y": 502
                    },
                    {
                        "x": 201,
                        "y": 524
                    },
                    {
                        "x": 156,
                        "y": 523
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
                        "x": 211,
                        "y": 502
                    },
                    {
                        "x": 246,
                        "y": 502
                    },
                    {
                        "x": 246,
                        "y": 524
                    },
                    {
                        "x": 211,
                        "y": 524
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
                        "x": 247,
                        "y": 502
                    },
                    {
                        "x": 254,
                        "y": 502
                    },
                    {
                        "x": 254,
                        "y": 524
                    },
                    {
                        "x": 247,
                        "y": 524
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
                        "x": 262,
                        "y": 502
                    },
                    {
                        "x": 276,
                        "y": 502
                    },
                    {
                        "x": 276,
                        "y": 524
                    },
                    {
                        "x": 262,
                        "y": 524
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
                        "x": 286,
                        "y": 502
                    },
                    {
                        "x": 360,
                        "y": 503
                    },
                    {
                        "x": 360,
                        "y": 526
                    },
                    {
                        "x": 286,
                        "y": 525
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
                        "x": 368,
                        "y": 504
                    },
                    {
                        "x": 458,
                        "y": 505
                    },
                    {
                        "x": 458,
                        "y": 527
                    },
                    {
                        "x": 368,
                        "y": 526
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
                        "x": 465,
                        "y": 505
                    },
                    {
                        "x": 530,
                        "y": 506
                    },
                    {
                        "x": 530,
                        "y": 529
                    },
                    {
                        "x": 465,
                        "y": 528
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
                        "x": 538,
                        "y": 506
                    },
                    {
                        "x": 546,
                        "y": 506
                    },
                    {
                        "x": 546,
                        "y": 528
                    },
                    {
                        "x": 538,
                        "y": 528
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
                        "x": 547,
                        "y": 506
                    },
                    {
                        "x": 562,
                        "y": 506
                    },
                    {
                        "x": 562,
                        "y": 528
                    },
                    {
                        "x": 547,
                        "y": 528
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
                        "x": 561,
                        "y": 507
                    },
                    {
                        "x": 571,
                        "y": 507
                    },
                    {
                        "x": 571,
                        "y": 529
                    },
                    {
                        "x": 561,
                        "y": 529
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
            "description": "GREEN",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 171,
                        "y": 547
                    },
                    {
                        "x": 259,
                        "y": 548
                    },
                    {
                        "x": 259,
                        "y": 560
                    },
                    {
                        "x": 171,
                        "y": 559
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
                        "x": 690,
                        "y": 506
                    },
                    {
                        "x": 799,
                        "y": 509
                    },
                    {
                        "x": 798,
                        "y": 529
                    },
                    {
                        "x": 689,
                        "y": 526
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
                        "x": 817,
                        "y": 510
                    },
                    {
                        "x": 896,
                        "y": 512
                    },
                    {
                        "x": 895,
                        "y": 532
                    },
                    {
                        "x": 816,
                        "y": 530
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
                        "x": 901,
                        "y": 513
                    },
                    {
                        "x": 928,
                        "y": 514
                    },
                    {
                        "x": 927,
                        "y": 533
                    },
                    {
                        "x": 900,
                        "y": 532
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
                        "x": 1006,
                        "y": 513
                    },
                    {
                        "x": 1050,
                        "y": 512
                    },
                    {
                        "x": 1050,
                        "y": 528
                    },
                    {
                        "x": 1006,
                        "y": 529
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
                        "x": 1082,
                        "y": 515
                    },
                    {
                        "x": 1111,
                        "y": 515
                    },
                    {
                        "x": 1111,
                        "y": 529
                    },
                    {
                        "x": 1082,
                        "y": 529
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
                        "x": 1272,
                        "y": 517
                    },
                    {
                        "x": 1373,
                        "y": 518
                    },
                    {
                        "x": 1373,
                        "y": 537
                    },
                    {
                        "x": 1272,
                        "y": 536
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
                        "x": 92,
                        "y": 569
                    },
                    {
                        "x": 108,
                        "y": 569
                    },
                    {
                        "x": 108,
                        "y": 580
                    },
                    {
                        "x": 92,
                        "y": 580
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
                        "x": 130,
                        "y": 569
                    },
                    {
                        "x": 176,
                        "y": 569
                    },
                    {
                        "x": 176,
                        "y": 585
                    },
                    {
                        "x": 130,
                        "y": 585
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
                        "x": 185,
                        "y": 569
                    },
                    {
                        "x": 225,
                        "y": 569
                    },
                    {
                        "x": 225,
                        "y": 585
                    },
                    {
                        "x": 185,
                        "y": 585
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
                        "x": 222,
                        "y": 569
                    },
                    {
                        "x": 231,
                        "y": 569
                    },
                    {
                        "x": 231,
                        "y": 585
                    },
                    {
                        "x": 222,
                        "y": 585
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
                        "x": 240,
                        "y": 569
                    },
                    {
                        "x": 256,
                        "y": 569
                    },
                    {
                        "x": 256,
                        "y": 585
                    },
                    {
                        "x": 240,
                        "y": 585
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
                        "x": 264,
                        "y": 569
                    },
                    {
                        "x": 343,
                        "y": 569
                    },
                    {
                        "x": 343,
                        "y": 586
                    },
                    {
                        "x": 264,
                        "y": 586
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
                        "x": 350,
                        "y": 570
                    },
                    {
                        "x": 445,
                        "y": 571
                    },
                    {
                        "x": 445,
                        "y": 587
                    },
                    {
                        "x": 350,
                        "y": 586
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
                        "x": 453,
                        "y": 570
                    },
                    {
                        "x": 518,
                        "y": 570
                    },
                    {
                        "x": 518,
                        "y": 587
                    },
                    {
                        "x": 453,
                        "y": 587
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
                        "x": 527,
                        "y": 571
                    },
                    {
                        "x": 538,
                        "y": 571
                    },
                    {
                        "x": 538,
                        "y": 587
                    },
                    {
                        "x": 527,
                        "y": 587
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
                        "x": 536,
                        "y": 571
                    },
                    {
                        "x": 552,
                        "y": 571
                    },
                    {
                        "x": 552,
                        "y": 587
                    },
                    {
                        "x": 536,
                        "y": 587
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
                        "x": 551,
                        "y": 571
                    },
                    {
                        "x": 562,
                        "y": 571
                    },
                    {
                        "x": 562,
                        "y": 587
                    },
                    {
                        "x": 551,
                        "y": 587
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
                        "x": 688,
                        "y": 570
                    },
                    {
                        "x": 798,
                        "y": 572
                    },
                    {
                        "x": 798,
                        "y": 585
                    },
                    {
                        "x": 688,
                        "y": 583
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
            "description": "GREEN",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 143,
                        "y": 610
                    },
                    {
                        "x": 235,
                        "y": 611
                    },
                    {
                        "x": 235,
                        "y": 626
                    },
                    {
                        "x": 143,
                        "y": 625
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
                        "x": 58,
                        "y": 636
                    },
                    {
                        "x": 77,
                        "y": 636
                    },
                    {
                        "x": 77,
                        "y": 649
                    },
                    {
                        "x": 58,
                        "y": 649
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
            "description": "1000",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 104,
                        "y": 636
                    },
                    {
                        "x": 167,
                        "y": 636
                    },
                    {
                        "x": 167,
                        "y": 655
                    },
                    {
                        "x": 104,
                        "y": 655
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
                        "x": 176,
                        "y": 636
                    },
                    {
                        "x": 216,
                        "y": 636
                    },
                    {
                        "x": 216,
                        "y": 655
                    },
                    {
                        "x": 176,
                        "y": 655
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
                        "x": 214,
                        "y": 636
                    },
                    {
                        "x": 223,
                        "y": 636
                    },
                    {
                        "x": 223,
                        "y": 655
                    },
                    {
                        "x": 214,
                        "y": 655
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
                        "x": 233,
                        "y": 636
                    },
                    {
                        "x": 249,
                        "y": 636
                    },
                    {
                        "x": 249,
                        "y": 655
                    },
                    {
                        "x": 233,
                        "y": 655
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
                        "x": 257,
                        "y": 636
                    },
                    {
                        "x": 339,
                        "y": 636
                    },
                    {
                        "x": 339,
                        "y": 655
                    },
                    {
                        "x": 257,
                        "y": 655
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
                        "x": 348,
                        "y": 636
                    },
                    {
                        "x": 447,
                        "y": 636
                    },
                    {
                        "x": 447,
                        "y": 655
                    },
                    {
                        "x": 348,
                        "y": 655
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
                        "x": 454,
                        "y": 636
                    },
                    {
                        "x": 526,
                        "y": 636
                    },
                    {
                        "x": 526,
                        "y": 655
                    },
                    {
                        "x": 454,
                        "y": 655
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
                        "x": 534,
                        "y": 636
                    },
                    {
                        "x": 545,
                        "y": 636
                    },
                    {
                        "x": 545,
                        "y": 655
                    },
                    {
                        "x": 534,
                        "y": 655
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
                        "x": 543,
                        "y": 636
                    },
                    {
                        "x": 560,
                        "y": 636
                    },
                    {
                        "x": 560,
                        "y": 655
                    },
                    {
                        "x": 543,
                        "y": 655
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
                        "x": 560,
                        "y": 636
                    },
                    {
                        "x": 571,
                        "y": 636
                    },
                    {
                        "x": 571,
                        "y": 655
                    },
                    {
                        "x": 560,
                        "y": 655
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
                        "x": 831,
                        "y": 538
                    },
                    {
                        "x": 840,
                        "y": 538
                    },
                    {
                        "x": 840,
                        "y": 552
                    },
                    {
                        "x": 831,
                        "y": 552
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
                        "x": 837,
                        "y": 538
                    },
                    {
                        "x": 886,
                        "y": 538
                    },
                    {
                        "x": 886,
                        "y": 552
                    },
                    {
                        "x": 837,
                        "y": 552
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
                        "x": 893,
                        "y": 538
                    },
                    {
                        "x": 921,
                        "y": 538
                    },
                    {
                        "x": 921,
                        "y": 552
                    },
                    {
                        "x": 893,
                        "y": 552
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
                        "x": 919,
                        "y": 538
                    },
                    {
                        "x": 928,
                        "y": 538
                    },
                    {
                        "x": 928,
                        "y": 552
                    },
                    {
                        "x": 919,
                        "y": 552
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
                        "x": 820,
                        "y": 573
                    },
                    {
                        "x": 899,
                        "y": 574
                    },
                    {
                        "x": 899,
                        "y": 589
                    },
                    {
                        "x": 820,
                        "y": 588
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
                        "x": 907,
                        "y": 575
                    },
                    {
                        "x": 935,
                        "y": 576
                    },
                    {
                        "x": 935,
                        "y": 590
                    },
                    {
                        "x": 907,
                        "y": 589
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
                        "x": 834,
                        "y": 594
                    },
                    {
                        "x": 843,
                        "y": 594
                    },
                    {
                        "x": 843,
                        "y": 609
                    },
                    {
                        "x": 834,
                        "y": 609
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
                        "x": 843,
                        "y": 594
                    },
                    {
                        "x": 892,
                        "y": 595
                    },
                    {
                        "x": 892,
                        "y": 610
                    },
                    {
                        "x": 843,
                        "y": 609
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
                        "x": 900,
                        "y": 594
                    },
                    {
                        "x": 930,
                        "y": 594
                    },
                    {
                        "x": 930,
                        "y": 609
                    },
                    {
                        "x": 900,
                        "y": 609
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
                        "x": 927,
                        "y": 595
                    },
                    {
                        "x": 937,
                        "y": 595
                    },
                    {
                        "x": 937,
                        "y": 610
                    },
                    {
                        "x": 927,
                        "y": 610
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
                        "x": 684,
                        "y": 634
                    },
                    {
                        "x": 803,
                        "y": 636
                    },
                    {
                        "x": 803,
                        "y": 654
                    },
                    {
                        "x": 684,
                        "y": 652
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
                        "x": 821,
                        "y": 636
                    },
                    {
                        "x": 909,
                        "y": 637
                    },
                    {
                        "x": 909,
                        "y": 655
                    },
                    {
                        "x": 821,
                        "y": 654
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
                        "x": 914,
                        "y": 638
                    },
                    {
                        "x": 944,
                        "y": 638
                    },
                    {
                        "x": 944,
                        "y": 656
                    },
                    {
                        "x": 914,
                        "y": 656
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
                        "x": 838,
                        "y": 662
                    },
                    {
                        "x": 848,
                        "y": 662
                    },
                    {
                        "x": 848,
                        "y": 678
                    },
                    {
                        "x": 838,
                        "y": 678
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
                        "x": 848,
                        "y": 662
                    },
                    {
                        "x": 898,
                        "y": 662
                    },
                    {
                        "x": 898,
                        "y": 678
                    },
                    {
                        "x": 848,
                        "y": 678
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
                        "x": 906,
                        "y": 662
                    },
                    {
                        "x": 939,
                        "y": 662
                    },
                    {
                        "x": 939,
                        "y": 678
                    },
                    {
                        "x": 906,
                        "y": 678
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
                        "x": 936,
                        "y": 662
                    },
                    {
                        "x": 946,
                        "y": 662
                    },
                    {
                        "x": 946,
                        "y": 678
                    },
                    {
                        "x": 936,
                        "y": 678
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
                        "x": 1015,
                        "y": 575
                    },
                    {
                        "x": 1061,
                        "y": 576
                    },
                    {
                        "x": 1061,
                        "y": 588
                    },
                    {
                        "x": 1015,
                        "y": 587
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
                        "x": 1093,
                        "y": 578
                    },
                    {
                        "x": 1123,
                        "y": 578
                    },
                    {
                        "x": 1123,
                        "y": 588
                    },
                    {
                        "x": 1093,
                        "y": 588
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
                        "x": 1290,
                        "y": 581
                    },
                    {
                        "x": 1393,
                        "y": 582
                    },
                    {
                        "x": 1393,
                        "y": 594
                    },
                    {
                        "x": 1290,
                        "y": 593
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
                        "x": 1028,
                        "y": 638
                    },
                    {
                        "x": 1075,
                        "y": 637
                    },
                    {
                        "x": 1075,
                        "y": 652
                    },
                    {
                        "x": 1028,
                        "y": 653
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
                        "x": 1110,
                        "y": 640
                    },
                    {
                        "x": 1141,
                        "y": 640
                    },
                    {
                        "x": 1141,
                        "y": 652
                    },
                    {
                        "x": 1110,
                        "y": 652
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
                        "x": 1316,
                        "y": 642
                    },
                    {
                        "x": 1427,
                        "y": 642
                    },
                    {
                        "x": 1427,
                        "y": 658
                    },
                    {
                        "x": 1316,
                        "y": 658
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
            "description": "GREEN",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 115,
                        "y": 687
                    },
                    {
                        "x": 212,
                        "y": 687
                    },
                    {
                        "x": 212,
                        "y": 702
                    },
                    {
                        "x": 115,
                        "y": 702
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
                        "x": 339,
                        "y": 767
                    },
                    {
                        "x": 410,
                        "y": 767
                    },
                    {
                        "x": 410,
                        "y": 786
                    },
                    {
                        "x": 339,
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
            "description": ":",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 413,
                        "y": 767
                    },
                    {
                        "x": 425,
                        "y": 767
                    },
                    {
                        "x": 425,
                        "y": 786
                    },
                    {
                        "x": 413,
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
            "description": "CGST",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 428,
                        "y": 767
                    },
                    {
                        "x": 521,
                        "y": 767
                    },
                    {
                        "x": 521,
                        "y": 786
                    },
                    {
                        "x": 428,
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
            "description": "OUTPUT",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 527,
                        "y": 767
                    },
                    {
                        "x": 662,
                        "y": 767
                    },
                    {
                        "x": 662,
                        "y": 786
                    },
                    {
                        "x": 527,
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
            "description": "GST",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 333,
                        "y": 798
                    },
                    {
                        "x": 404,
                        "y": 797
                    },
                    {
                        "x": 404,
                        "y": 818
                    },
                    {
                        "x": 333,
                        "y": 819
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
                        "x": 400,
                        "y": 798
                    },
                    {
                        "x": 413,
                        "y": 798
                    },
                    {
                        "x": 413,
                        "y": 818
                    },
                    {
                        "x": 400,
                        "y": 818
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
                        "x": 422,
                        "y": 797
                    },
                    {
                        "x": 516,
                        "y": 796
                    },
                    {
                        "x": 516,
                        "y": 817
                    },
                    {
                        "x": 422,
                        "y": 818
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
                        "x": 524,
                        "y": 796
                    },
                    {
                        "x": 659,
                        "y": 795
                    },
                    {
                        "x": 659,
                        "y": 816
                    },
                    {
                        "x": 524,
                        "y": 817
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
            "description": "16,652.54",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 1333,
                        "y": 728
                    },
                    {
                        "x": 1462,
                        "y": 727
                    },
                    {
                        "x": 1462,
                        "y": 746
                    },
                    {
                        "x": 1333,
                        "y": 747
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
            "description": "1,498.73",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 1362,
                        "y": 769
                    },
                    {
                        "x": 1476,
                        "y": 767
                    },
                    {
                        "x": 1476,
                        "y": 785
                    },
                    {
                        "x": 1362,
                        "y": 787
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
            "description": "1,498.73",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 1371,
                        "y": 796
                    },
                    {
                        "x": 1488,
                        "y": 794
                    },
                    {
                        "x": 1488,
                        "y": 815
                    },
                    {
                        "x": 1371,
                        "y": 817
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
                        "x": 572,
                        "y": 1161
                    },
                    {
                        "x": 645,
                        "y": 1160
                    },
                    {
                        "x": 645,
                        "y": 1174
                    },
                    {
                        "x": 572,
                        "y": 1175
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
            "description": "4,500.00",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 839,
                        "y": 1155
                    },
                    {
                        "x": 948,
                        "y": 1155
                    },
                    {
                        "x": 948,
                        "y": 1170
                    },
                    {
                        "x": 839,
                        "y": 1170
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
                        "x": 956,
                        "y": 1155
                    },
                    {
                        "x": 993,
                        "y": 1155
                    },
                    {
                        "x": 993,
                        "y": 1170
                    },
                    {
                        "x": 956,
                        "y": 1170
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
            "description": "19,650.00",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 1404,
                        "y": 1145
                    },
                    {
                        "x": 1577,
                        "y": 1143
                    },
                    {
                        "x": 1577,
                        "y": 1161
                    },
                    {
                        "x": 1404,
                        "y": 1163
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
            "description": "40",
            "score": 0,
            "confidence": 0,
            "topicality": 0,
            "boundingPoly": {
                "vertices": [
                    {
                        "x": 1481,
                        "y": 1159
                    },
                    {
                        "x": 1538,
                        "y": 1158
                    },
                    {
                        "x": 1538,
                        "y": 1172
                    },
                    {
                        "x": 1481,
                        "y": 1173
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
                        "x": 35,
                        "y": 1180
                    },
                    {
                        "x": 181,
                        "y": 1181
                    },
                    {
                        "x": 181,
                        "y": 1195
                    },
                    {
                        "x": 35,
                        "y": 1194
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
                        "x": 188,
                        "y": 1182
                    },
                    {
                        "x": 200,
                        "y": 1182
                    },
                    {
                        "x": 200,
                        "y": 1195
                    },
                    {
                        "x": 188,
                        "y": 1195
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
                        "x": 193,
                        "y": 1182
                    },
                    {
                        "x": 217,
                        "y": 1182
                    },
                    {
                        "x": 217,
                        "y": 1195
                    },
                    {
                        "x": 193,
                        "y": 1195
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
                        "x": 223,
                        "y": 1182
                    },
                    {
                        "x": 298,
                        "y": 1183
                    },
                    {
                        "x": 298,
                        "y": 1197
                    },
                    {
                        "x": 223,
                        "y": 1196
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
                        "x": 295,
                        "y": 1183
                    },
                    {
                        "x": 307,
                        "y": 1183
                    },
                    {
                        "x": 307,
                        "y": 1196
                    },
                    {
                        "x": 295,
                        "y": 1196
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
                try {
                    const extractInfo = onExtractBillInfo(textAnnotation);
                    navigate('/product', {
                        state: {
                            value: extractInfo
                        }
                    })
                    console.log('the extracted information is ', extractInfo);
                } catch {
                    console.log('error occured')
                }
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
                try {
                    const extractInfo = onExtractBillInfo(ann);
                    navigate('/product', {
                        state: {
                            value: extractInfo
                        }
                    })
                    console.log('the extracted information is ', extractInfo);
                } catch {
                    console.log('error occured')
                }
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