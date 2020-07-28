/* eslint-disable react/prop-types */
import React from 'react';
import {
  VideoCardGroupContainer,
  VideoCardList,
  Title,
  ExtraLink,
} from './styles';
import VideoCard from './components/VideoCard';

interface Video {
  titulo: string;
  url: string;
}

interface LinkExtra {
  url: string;
  text: string;
}

interface VideoCardGroupProps {
  ignoreFirstVideo?: boolean;
  category: {
    titulo: string;
    link?: string;
    cor: string;
    link_extra?: LinkExtra;
    videos: Video[];
  };
}

const VideoCardGroup: React.FC<VideoCardGroupProps> = ({
  ignoreFirstVideo,
  category,
}) => {
  const categoryTitle = category.titulo;
  const categoryColor = category.cor;
  const categoryExtraLink = category.link_extra;
  const { videos } = category;
  return (
    <VideoCardGroupContainer>
      {categoryTitle && (
        <>
          <Title style={{ backgroundColor: categoryColor || 'red' }}>
            {categoryTitle}
          </Title>
          {categoryExtraLink && (
            <ExtraLink href={categoryExtraLink.url} target="_blank">
              {categoryExtraLink.text}
            </ExtraLink>
          )}
        </>
      )}
      <VideoCardList>
        {videos.map((video, index) => {
          if (ignoreFirstVideo && index === 0) {
            return null;
          }

          return (
            <li key={video.titulo}>
              <VideoCard
                videoTitle={video.titulo}
                videoURL={video.url}
                categoryColor={categoryColor}
              />
            </li>
          );
        })}
      </VideoCardList>
    </VideoCardGroupContainer>
  );
};

export default VideoCardGroup;
