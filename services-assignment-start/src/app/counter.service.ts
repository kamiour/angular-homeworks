export class CounterService {
    activeToInactiveCounter: number = 0;
    inactiveToActiveCounter: number = 0;

    increaseActiveToInactive() {
        console.log('ActiveToInactive: '+ ++this.activeToInactiveCounter);
    }

    increaseInactiveToActive() {
        console.log('InactiveToActive: '+ ++this.inactiveToActiveCounter);
    }
}