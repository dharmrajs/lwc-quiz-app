import { LightningElement, track } from 'lwc';
import SHAPE_IMAGE_COLLECTION from '@salesforce/resourceUrl/ShapeImageCollection';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class GameBoard extends LightningElement {
    CIRCLE_SHAPE_PATH = SHAPE_IMAGE_COLLECTION + '/ShapeImageCollection/circleImage.png';
    CYLINDER_SHAPE_PATH = SHAPE_IMAGE_COLLECTION + '/ShapeImageCollection/cylinderImage.png';
    PENTAGON_SHAPE_PATH = SHAPE_IMAGE_COLLECTION + '/ShapeImageCollection/pentagonImage.png';
    SQUARE_SHAPE_PATH = SHAPE_IMAGE_COLLECTION + '/ShapeImageCollection/squareImage.png';
    TRIANGLE_SHAPE_PATH = SHAPE_IMAGE_COLLECTION + '/ShapeImageCollection/triangleImage.png';
    CIRCLE = "circle";
    CYLINDER = "cylinder";
    PENTAGON = "pentagon";
    SQUARE = "square";
    TRIANGLE = "triangle";
    memoryStack = [];
    correctMoves = 0;
    MAX_TILES = 0;

    constructor() {
        debugger;
        super();
        this.MAX_TILES = this.memoryTileArray.length
    }
    
    renderedCallback() {
        debugger;
        console.log("renderedCallback called");
    }
    @track
    memoryTileArray = [
        {
            tileNo : 1,
            imagePath : this.CIRCLE_SHAPE_PATH,
            memoryName : this.CIRCLE,
            
        },
        {
            tileNo : 2,
            imagePath : this.CYLINDER_SHAPE_PATH,
            memoryName : this.CYLINDER,
        },
        {
            tileNo : 3,
            imagePath : this.PENTAGON_SHAPE_PATH,
            memoryName : this.PENTAGON,
        },
        {
            tileNo : 4,
            imagePath : this.SQUARE_SHAPE_PATH,
            memoryName : this.SQUARE,
        },
        {
            tileNo : 5,
            imagePath : this.TRIANGLE_SHAPE_PATH,
            memoryName : this.TRIANGLE,
        },
        {
            tileNo : 6,
            imagePath : this.CIRCLE_SHAPE_PATH,
            memoryName : this.CIRCLE,
        },
        {
            tileNo : 7,
            imagePath : this.CYLINDER_SHAPE_PATH,
            memoryName : this.CYLINDER,
        },
        {
            tileNo : 8,
            imagePath : this.PENTAGON_SHAPE_PATH,
            memoryName : this.PENTAGON,
        },
        {
            tileNo : 9,
            imagePath : this.SQUARE_SHAPE_PATH,
            memoryName : this.SQUARE,
        },
        {
            tileNo : 10,
            imagePath : this.TRIANGLE_SHAPE_PATH,
            memoryName : this.TRIANGLE,
        },
        {
            tileNo : 11,
            imagePath : this.CIRCLE_SHAPE_PATH,
            memoryName : this.CIRCLE,
        },
        {
            tileNo : 12,
            imagePath : this.CYLINDER_SHAPE_PATH,
            memoryName : this.CYLINDER,
        },        
        {
            tileNo : 13,
            imagePath : this.PENTAGON_SHAPE_PATH,
            memoryName : this.PENTAGON,
        },
        {
            tileNo : 14,
            imagePath : this.SQUARE_SHAPE_PATH,
            memoryName : this.SQUARE,
        },
        {
            tileNo : 15,
            imagePath : this.TRIANGLE_SHAPE_PATH,
            memoryName : this.TRIANGLE,
        },
        {
            tileNo : 16,
            imagePath : this.CIRCLE_SHAPE_PATH,
            memoryName : this.CIRCLE,
        },        
    ];
    handleMemoryClick(event) {
        debugger;
        let clickedMemoryTile = event.currentTarget.dataset.key;
        if(clickedMemoryTile) {
            console.log(this.template.querySelectorAll("c-memory-tile"));
            this.template.querySelectorAll("c-memory-tile").forEach((memoryTileCmp, idx)=> {
                console.log(memoryTileCmp);
                if(idx+1==clickedMemoryTile) {
                    memoryTileCmp.displayImage();
                    this.storeMemory(memoryTileCmp)
                }
            });
        }
    }

    storeMemory(memoryTileCmp) {
        this.memoryStack.push(memoryTileCmp.memoryName);        
        this.checkMemoryGameDecision();
    }

    checkMemoryGameDecision() {
        if(this.memoryStack.length >= 2) {
            let lastMemory = this.memoryStack.pop();
            let lastToLastMemory = this.memoryStack.pop();
            if(lastMemory === lastToLastMemory) {
                this.correctMoves++;
                this.memoryStack.push(lastToLastMemory);
                this.memoryStack.push(lastMemory);
                if(this.correctMoves===this.MAX_TILES) {                    
                    this.showWonToastMsg();
                    this.resetBoard();
                }
            } else {
                this.showLostToastMsg();
                this.resetBoard();
            }
        }
    }

    showLostToastMsg() {
        const showErrorToast = new ShowToastEvent({
            title : "Lost",
            message : "Ops this is wrong card your score is  : " + this.correctMoves,
            variant : "error",
        });
        this.dispatchEvent(showErrorToast);
    }

    showWonToastMsg() {
        const showErrorToast = new ShowToastEvent({
            title : "Won",
            message : "Congratulations your score : " + this.correctMoves,
            variant : "success",
        });
        this.dispatchEvent(showErrorToast);
    }

    resetBoard() {
        debugger;
        this.memoryStack = [];
        this.correctMoves = 0;
        this.template.querySelectorAll("c-memory-tile").forEach( (imgTile) => {
            imgTile.resetTile();
        });
    }

}