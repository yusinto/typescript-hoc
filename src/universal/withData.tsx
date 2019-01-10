import * as React from 'react';

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface InjectedProps {
  data: any | Post;
}

interface HocState extends InjectedProps {
  isLoading: boolean;
}

export default function withData<P>(WrappedComponent: React.ComponentType<P & InjectedProps>, dataUrl: string) {
  return class extends React.Component<P, HocState> {
    readonly state: HocState = { isLoading: true, data: {} };

    fetchData = async () => {
      const response = await fetch(dataUrl);
      const data = await response.json();
      this.setState({ isLoading: false, data });
    };

    async componentDidMount() {
      await this.fetchData();
    }

    render() {
      const { isLoading, data } = this.state;
      return isLoading ? 'Loading' : <WrappedComponent {...this.props} data={data} />;
    }
  };
}
