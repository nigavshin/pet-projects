import ComicsList from "../comicsList/ComicsList";
import AppBanner from "../appBanner/AppBanner";
import { Helmet } from "react-helmet";

const ComicsPage = () => {
  return (
    <>
      <Helmet>
        <meta name="description" content="Page with list of out comics" />
        <title>Comics</title>
      </Helmet>
      <AppBanner />
      <ComicsList />
    </>
  );
};

export default ComicsPage;
