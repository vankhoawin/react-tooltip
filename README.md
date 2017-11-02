# react-tooltip

## To Run
1. Install dependencies `yarn install`
2. Start server `yarn start`
3. Mouseover `Van`

## Notes
- [Split by routes/components, not features](https://hashnode.com/post/tips-for-a-better-redux-architecture-lessons-for-enterprise-scale-civrlqhuy0keqc6539boivk2f)
- [CSS modules](src/components/UserTooltip/styles.scss)
- Singular data store for caching individual user calls
  - Separate components regarding the same user will not send extra API call
