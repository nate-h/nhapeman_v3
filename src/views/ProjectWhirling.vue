<template>
    <project-template>
        <template v-slot:summaryImage>
            <img src="~img/whirling.png" />
        </template>

        <template v-slot:summaryText>
            <p>
                I built a music visualizer that tries to intelligently
                understand as much about the song that's playing so it could
                create a more representative visual. All songs played have to
                undergo a two step preprocessing algorithm that runs a source
                separator and a feature extractor on each of the generated
                sources. I use Spleeter and Librosa to do source separation.
                Spleeter is able to separate the drums, vocals, bass and other
                for each track. Librosa can separate the percussion and
                harmonics. For feature extracting, I use Librosa exclusively.
            </p>
        </template>

        <template v-slot:demo>
            <div style="position:relative;padding-top:75%;">
                <iframe
                    src="https://player.vimeo.com/video/454955980"
                    frameborder="0"
                    allow="autoplay; fullscreen"
                    allowfullscreen
                    style="position:absolute;top:0;left:0;width:100%;height:100%;"
                >
                </iframe>
            </div>
        </template>

        <template v-slot:demoDetails>
            <p>
                I haven't worked extensively with python for GUI/game
                development so I decided to use pygame and opengl for creating
                the visualizer. I thought it would be a good learning experience
                to gauge the python based gui/game development tools out there.
                What it turned into was a good understanding on how to use numpy
                for large array manipulation and opengl for VAO rendering. I
                have 6 visualizers that can be cycled through. Visualizers 1, 4
                and 6 make heavy use of moving averages, thresholds and other
                heuristics to get the colors to render just right. Visualizers 1
                and 4->6 use the same colors to represent the separated source
                that's heard. See color key below for color mappings. Brief
                description of each visualizer: 1. combo_board: Uses both
                spectrograms and features to render a grid of squares. Each
                illuminated square represents a certain frequency range heard.
                Squares near the top right of the screen map to higher
                frequencies. The color of that square represents what source it
                came from. 2. debug: Shows all features generated for current
                source separation plan. 3. spectrogram: Shows all spectrograms
                generated for current source separation plan. 4.
                concentric_squares: Uses the source separated spectrograms to
                render concentric square rings that represent what frequency is
                being played. The bigger the ring, the higher the frequency.
                Ring color matches source heard. This visualizer combines colors
                if 2+ sources are playing the same frequency. 5.
                stacked_equalizers: Show all frequencies heard with no
                adjustments. 6. checkerboard: same as combo_board but with no
                use of features and much less filtering.
            </p>
            <h2>TLDR - I built a music visualizer</h2>
            <p>Code <a href="https://github.com/nate-h/Whirling"> https://github.com/nate-h/Whirling</a></p>
            <p>The colors map to separated sources. Here's the key:</p>
            <ul>
                <li>Green -> vocals</li>
                <li>Blue -> other (piano, guitar, etc.)</li>
                <li>Red -> Drums</li>
                <li>Purple -> Bass</li>
            </ul>
        </template>
    </project-template>
</template>

<script>
export default {
    name: "Whirling",
    path: "whirling",
    listed: true,
    data() {
        return {
            title: "Whirling: Audio visualizer that uses AI",
            description: "Librosa, OpenGL, Python",
            buttonText: "Demo"
        };
    }
};
</script>

<style lang="scss">
    ul {
        list-style: none;
    }
</style>