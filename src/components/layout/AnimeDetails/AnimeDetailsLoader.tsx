import ContentLoader from "react-content-loader"

const AnimeDetailsLoader = () => (
  <ContentLoader 
    speed={2}
    width={"100%"}
    height={460}
    viewBox="0 0 600 460"
    backgroundColor="#cfcfcf"
    foregroundColor="#f7f7f7"
  >
    <rect x="-1" y="10" rx="2" ry="2" width="255" height="300" /> 
    <rect x="330" y="10" rx="2" ry="2" width="260" height="10" /> 
    <rect x="330" y="50" rx="2" ry="2" width="100" height="7" /> 
    <rect x="490" y="50" rx="2" ry="2" width="100" height="7" />
    <rect x="330" y="70" rx="2" ry="2" width="100" height="7" /> 
    <rect x="490" y="70" rx="2" ry="2" width="100" height="7" />
    <rect x="330" y="160" rx="2" ry="2" width="120" height="10" /> 
    <rect x="330" y="200" rx="2" ry="2" width="260" height="10" /> 
    <rect x="330" y="220" rx="2" ry="2" width="260" height="10" /> 
    <rect x="330" y="240" rx="2" ry="2" width="260" height="10" />
    <rect x="330" y="260" rx="2" ry="2" width="260" height="10" />
    <rect x="330" y="280" rx="2" ry="2" width="260" height="10" />
  </ContentLoader>
)

export default AnimeDetailsLoader