# Vertical Timeline with Dynamic active state based on scroll position

To dynamically update the active state of items in a vertical timeline as the user scrolls through the page. The active item should change
depending on its position relative to the viewport.

## Main Components

- **ChallengeInfoSection:** The main section that contains the Vertical Timeline.
- **VerticalTimeline:** THe component that lists the timeline items.
- **TimelineItem:** A single item in the timeline.

## Features

1. Vertical Timeline: Lists items in a vertical timeline format.
2. Scroll-Based Activation: Changes the active status of items based on the user's scroll position.
3. At Least One Active Item: Enforces a rule that at least one item is active at any given point in time.

## Steps to implement

### 1.Update `VerticalTimeline`

1.1 **State for Active Item** use `useState()` to create state variable called `activeItems` that holds an array indicating the active status for each item.

```jsx
const [activeItems, setActiveItems] = useState(
  new Array(items.length).fill(false)
);
```

1.2 Add `handleScroll` function that listens to the scroll events and updates `activeItems`.

First create array to store new active states. Then loop through timeline items. After that get elements position and dimensions using `useRef()` hook.
After that check if the item is in the viewport, then update the array with new active state. After iterating through timeline items updates the activeItems

```jsx
  const handleScroll = () => {
    let newActiveItems = new Array(items.length).fill(false);
    let foundActiveItem = false;

    // Loop through items to check which one(s) is(are) active.
    for (let i = 0; i < items.length; i++) {
      if (refs.current[i]) {
        const rect = (refs.current[i] as HTMLDivElement).getBoundingClientRect();

        // Checking if the middle of the item is within the middle of the viewport.
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          newActiveItems[i] = true;
          foundActiveItem = true;
          break;
        }
      }
    }

    // Enforce that one item is always active
    if (!foundActiveItem) {
      const lastItemRect = (refs.current[items.length - 1] as HTMLDivElement).getBoundingClientRect();
      const firstItemRect = (refs.current[0] as HTMLDivElement).getBoundingClientRect();

      if (lastItemRect.bottom < window.innerHeight / 2) {
        // User scrolled past all items
        newActiveItems[items.length - 1] = true;
      } else if (firstItemRect.top > window.innerHeight / 2) {
        // User hasn't scrolled to the first item yet
        newActiveItems[0] = true;
      }
    }

    setActiveItems(newActiveItems);
  };
```
