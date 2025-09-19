function useDatabase() {
  const [data, setData] = useState(null);
  const [isPanding, setIsPanding] = useState(false);
  const [error, setError] = useState(null);
  const postData = async (url, data) => {
    try {
      setIsPanding(true);
      const req = await axiosInstance.post(url, data);
      setData(req.data);
      toast("Finally");
    } catch (error) {
      setError(error.messagyt);
    } finally {
      setIsPanding(false);
    }
  };

  const deletePost = async (url) => {
    try {
      setIsPanding(true);
      const req = await axiosInstance.delete(url);
      setData(req.data);
    } catch (error) {
      setError(error.message);
      toast.error(error.message);
    } finally {
      setIsPanding(false);
    }
  };

  const getData = async (url) => {
    try {
      setIsPanding(true);
      const req = await axiosInstance.get(url);
      setData(req.data);
    } catch (error) {
      setError(error.message);
      toast.error(error.message);
    } finally {
      setIsPanding(false);
    }
  };

  return { postData, deletePost, getData, isPanding, error, data };
}

export default useDatabase;
