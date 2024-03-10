class Cursor {
    constructor() {
        this.cursor = false;
    }
    getCursor() {
        return this.cursor;
    }

    setCursor(cursor) {
        this.cursor = cursor;
    }
}

function f() {
    return new Cursor();
}
export default f;