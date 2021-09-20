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

  describe('Backstage Passes', () => {
    let gildedRoseBackstage;
    let backstagePass;
    beforeEach(() => {
      gildedRoseBackstage = new Shop([new Item('Backstage passes to a TAFKAL80ETC concert', 12, 10)])
      backstagePass = gildedRoseBackstage.updateQuality();
    });
    it('if sellIn is above 10 increases in quality by 1', () => {
      expect(backstagePass[0].quality).toEqual(11)
      expect(backstagePass[0].sellIn).toEqual(11)
    })
    it('increases in quality by 2 if sellIn is equal to or less than 10', () => {
      for(let i = 0; i < 3; i ++){
        gildedRoseBackstage.updateQuality();
      }
      let updatedBackstagePass = gildedRoseBackstage.updateQuality()
      expect(updatedBackstagePass[0].quality).toEqual(18)
      expect(updatedBackstagePass[0].sellIn).toEqual(7)
    })
    it('increases in quality by 3 if sellIn is equal to or less than 5', () => {
      let gildedRoseBackstage = new Shop([new Item('Backstage passes to a TAFKAL80ETC concert', 5, 10)])
      for(let i = 0; i < 3; i ++){
        gildedRoseBackstage.updateQuality();
      }
      let updatedBackstagePass = gildedRoseBackstage.updateQuality()
      expect(updatedBackstagePass[0].quality).toEqual(22)
      expect(updatedBackstagePass[0].sellIn).toEqual(1)
    });
    it('drops quality to 0 after the concert ends', () => {
      for(let i = 0; i < 14; i ++){
        gildedRoseBackstage.updateQuality();
      }
      expect(backstagePass[0].quality).toEqual(0)
      expect(backstagePass[0].sellIn).toEqual(-3)
    })
  });
});

