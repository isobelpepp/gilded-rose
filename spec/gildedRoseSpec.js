// var {Shop, Item} = require('../src/gilded_rose.js');

describe("Gilded Rose", function() {

  let gildedRose;
  let items;

  beforeEach(() => {
    gildedRose = new Shop([ new Item("foo", 3, 10) ]);
    items = gildedRose.updateQuality();
  });

  describe('Regular items', () => {
    it("should decrease the quality by 1 at the end of the day given a regular item", function() {
      expect(items[0].name).toEqual("foo");
      expect(items[0].quality).toEqual(9)
    });
    it("should decrease the sellIn by 1 at the end of the day given a regular item", function() {
      expect(items[0].name).toEqual("foo");
      expect(items[0].sellIn).toEqual(2)
    });
    it("should decrease quality by 2 if sellIn is less than 0", function() {
      gildedRose.updateQuality()
      gildedRose.updateQuality()
      let updatedItems = gildedRose.updateQuality()
      expect(updatedItems[0].sellIn).toEqual(-1);
      expect(updatedItems[0].quality).toEqual(5)
    });

  });
});
