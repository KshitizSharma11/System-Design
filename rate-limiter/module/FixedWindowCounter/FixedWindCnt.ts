export default class FixedWindowCounter {
private winSize: number;
private maxReq: number;
private currWinStart: number;
private currWinCount: number;

constructor(winSize: number, maxReq: number) {
    this.winSize = winSize;
    this.maxReq = maxReq;
    this.currWinStart = Date.now();
    this.currWinCount = 0;
}
isAllowed(){
    const now=Date.now();
     if(now-this.currWinStart >= this.winSize ) 
    {
        this.currWinStart = now;
        this.currWinCount = 0;
    
    }
    if(this.currWinCount < this.maxReq) {
        this.currWinCount++;
        return true;
    }
    else
        return false;
    }
   
    
        }
    




