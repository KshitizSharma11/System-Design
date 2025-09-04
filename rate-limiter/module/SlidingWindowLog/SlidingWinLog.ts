export default class SlidingWinLog{

  private winSize:number;
    private maxReq:number;
    private log:number[];
    

    constructor(winSize:number,maxReq:number){
        this.winSize=winSize;
        this.maxReq=maxReq;
        this.log=[];
        
    }
    public isAllowed():boolean{
        const now=Date.now();
    while(this.log.length>0 && now - this.log[0]>=this.winSize){
        this.log.shift();
    }
if(this.log.length < this.maxReq){
            this.log.push(now);
            return true;
        }
        else
        return false;
    }

}
        