class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items=[]){
    this.items = items;
  }
  updateQuality() {
    for (var i = 0; i < this.items.length; i++) {
      if(this.isRegularItem(this.items[i].name)) {
        this.regularItemsProcess(this.items[i])
      } else if (this.items[i].name === 'Aged Brie') {
        this.agedBrieProcess(this.items[i])
      } else if (this.items[i].name === 'Backstage passes to a TAFKAL80ETC concert') {
        this.backstagePassProcess(this.items[i])
      } else if(this.items[i].name === 'Conjured') {
        this.conjuredItemProcess(this.items[i])
      }
    }

    return this.items;
  }

  isRegularItem(name) {
    if(name === 'Sulfuras, Hand of Ragnaros') {
      return false
    } else if(name === 'Backstage passes to a TAFKAL80ETC concert') {
      return false
    } else if(name === 'Aged Brie') {
      return false
    } else if (name === 'Conjured') {
      return false
    } else {
      return true
    }
  }

  regularItemsProcess(items) {
    if(items.sellIn > 0 && items.quality > 0) {
      items.quality -= 1
    } else if(items.quality > 0) {
      items.quality === 1 ? items.quality = 0 : items.quality -= 2
    } 
    items.sellIn -= 1
    return items
  }

  agedBrieProcess(items) {
    if(items.quality < 50) {
      items.quality += 1
    } 
    items.sellIn -= 1
    return items
  }

  backstagePassProcess(items) {
    if(items.sellIn > 10) {
      items.quality += 1
    } else if (items.sellIn <= 10 && items.sellIn > 5) {
      items.quality += 2
    } else if (items.sellIn <= 5 && items.sellIn >= 0) {
      items.quality += 3
    } else {
      items.quality = 0
    }
    items.sellIn -= 1
    return items
  }

  conjuredItemProcess(items) {
    if(items.quality > 0 && items.sellIn >= 0) {
      items.quality -= 2
    } else if(items.quality > 0) {
      items.quality < 4 ? items.quality = 0 : items.quality -= 4
    }
    items.sellIn -= 1
    return items
  }
}