// import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';


export function BlogPost() {
    return (
      <SkeletonTheme baseColor="white" highlightColor="black">
    <p>
      <Skeleton count={100} />
    </p>
  </SkeletonTheme>
    );
  }