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
    it('should never decrease quality to less than 0', () => {
      for(let i = 0; i < 20; i ++){
        gildedRose.updateQuality();
      }
      let updatedItems = gildedRose.updateQuality()
      expect(updatedItems[0].quality).toEqual(0)
    })
  });

  describe('Aged Brie', () => {
    it('increases in quality as sellIn decreases', () => {
      gildedRoseBrie = new Shop([new Item('Aged Brie', 5, 10)])
     let brie = gildedRoseBrie.updateQuality()
     expect(brie[0].quality).toEqual(11)
     expect(brie[0].sellIn).toEqual(4)
    })
    it('cannot go above 50 in quality', () => {
      gildedRoseBrie = new Shop([new Item('Aged Brie', 5, 10)])
      for(let i = 0; i < 50; i ++){
        gildedRoseBrie.updateQuality();
      }
      let brie = gildedRoseBrie.updateQuality()
      expect(brie[0].quality).toEqual(50)
    })
  })

  describe('Sulfuras', () => {
    it('quality and sellIn value never change', () => {
      let gildedRoseSulfura = new Shop([new Item('Sulfuras, Hand of Ragnaros', 5, 10)])
      let sulfuras = gildedRoseSulfura.updateQuality()
      expect(sulfuras[0].quality).toEqual(10)
      expect(sulfuras[0].sellIn).toEqual(5)
    })
  })
});
