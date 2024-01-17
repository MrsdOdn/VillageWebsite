import React from "react";
import { Paper, Typography } from "@mui/material";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@mui/lab";

const YolHaritasiTimeline = ({ duraklar }) => {
  return (
    <Timeline position="alternate">
      {duraklar.map((durak, index) => (
        <TimelineItem key={index}>
          <TimelineSeparator>
            <TimelineDot color="primary" />
            {index !== duraklar.length - 1 && <TimelineConnector />}
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} sx={{ padding: "6px 16px" }}>
              <Typography variant="h6" component="div">
                {durak.ad}
              </Typography>
              <Typography variant="subtitle2" color="text.secondary">
                {durak.saat}
              </Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
};

export default YolHaritasiTimeline;
