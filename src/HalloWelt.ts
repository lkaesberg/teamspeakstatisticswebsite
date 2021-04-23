
class HalloWelt{
    private readonly name: String;
    private readonly alter: number;
    constructor(name: String, alter: number) {
        this.name = name
        this.alter = alter
    }

    fetchData(){
        return `Ich bin ${this.name} und ich bin ${this.alter} jahre alt`
    }
}
export default HalloWelt