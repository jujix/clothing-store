import React from "react";
import { shallow } from "enzyme";

import CartItem from "../cart-item/cart-item";

describe("CartItem component", () => {

        const mockProps = {
            item: {
                imageUrl: "https://test-url",
                price: 2,
                name: "jacket",
                quantity: 5
            }
        };

    const wrapper = shallow<typeof CartItem>(<CartItem {...mockProps} />);

    it("should render CartItem component", () => {
        expect(wrapper).toMatchSnapshot();
    });

});
