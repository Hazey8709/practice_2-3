const { todoService, todoServiceId } = require("../services/todoService");

jest.mock("../__mocks__/todoService");

describe("Todo Service Test", () => {
    test("User return 10 Todos", async () => {
        const result = await todoService();

        expect(result.data).toHaveLength(200);
        expect(result.data[8].userId).toEqual(1);
        expect(result.data[8].id).toEqual(9);
        expect(result.data[8].title).toEqual("molestiae perspiciatis ipsa");
        expect(result.data[8].completed).toEqual(false);
    });

    test("Return By ID", async () => {
        const result = await todoServiceId(3);

        expect(result.data.userId).toEqual(1);
        expect(result.data.title).toEqual("fugiat veniam minus");
        expect(result.data.completed).toEqual(false);
    });
});
