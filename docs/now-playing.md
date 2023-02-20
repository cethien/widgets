# Now Playing

using [Tuna](https://obsproject.com/forum/resources/tuna.843/)

## Customizing

here are some stuff you can customize via the CSS tab in OBS:

### Font / Text

```css
figure {
	font-family: 'Comic Sans MS' !important;
	text-transform: lowercase;
}
```

### App Orientation

```css
figure {
	flex-direction: row-reverse !important;
}
/* media query for 100px modifier */
#texts {
	@media (max-height: 100px) : {
		align-items: flex-start !important;
	}

	text-align: left !important;
}
```
