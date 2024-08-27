document.addEventListener('DOMContentLoaded', () => {
    const robot = new Robot();
    const grid = new Grid(5);

    const updateStatus = () => {
        const { x, y, facing } = robot.getPosition();
        document.getElementById('status').innerText = `Position: (${x}, ${y}) | Facing: ${facing}`;
        grid.updateGrid(robot.getPosition());
    };

    document.getElementById('move').addEventListener('click', () => {
        robot.move();
        updateStatus();
    });

    document.getElementById('left').addEventListener('click', () => {
        robot.rotateLeft();
        updateStatus();
    });

    document.getElementById('right').addEventListener('click', () => {
        robot.rotateRight();
        updateStatus();
    });

    // Initial render
    updateStatus();
});
