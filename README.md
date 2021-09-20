- Each item has a name, SellIn, quality
  - At the end of each day SellIn decreases by 1 (unless it is 0)
  - Quality:
    - Quality decreases by 1 if SellIn => 0
    - Quality decreases by 2 if SellIn < 0
    - Quality can not be below 0 or above 50

  - Exceptions
    - Aged Brie increases in quality
    - Sulfuras never have to be sold and don't decrease in quality
    - Backstage Passes
      - increase in quality as SellIn value approaches
      - by 2 when there are 10 days or less
      - by 3 when there are 5 days or less
      - quality drops to 0 after the concert
    - “Conjured” items degrade in Quality twice as fast as normal items